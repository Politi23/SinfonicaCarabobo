export const domain = import.meta.env.WP_DOMAIN || "http://localhost:10004";
export const apiBase = `${domain}/wp-json/wp/v2`;

const DEFAULT_TIMEOUT = 10000; // 10 seconds timeout

export const fetchAPI = async (
	endpoint: string,
	timeout: number = DEFAULT_TIMEOUT,
) => {
	try {
		// Create a timeout promise
		const timeoutPromise = new Promise((_, reject) => {
			setTimeout(() => reject(new Error("Request timeout")), timeout);
		});

		// Race the fetch request against the timeout
		const fetchPromise = fetch(`${apiBase}${endpoint}`);

		const res = (await Promise.race([
			fetchPromise,
			timeoutPromise,
		])) as Response;

		if (!res.ok) {
			console.error(`HTTP Error fetching ${endpoint}: ${res.statusText}`);
			return null;
		}

		return await res.json();
	} catch (error: any) {
		// Handle network errors, timeouts, and other fetch-related errors
		if (error.name === "AbortError" || error.message.includes("timeout")) {
			console.error(
				`Timeout error fetching ${endpoint}: Request took longer than ${timeout}ms`,
			);
		} else if (error instanceof TypeError) {
			// Network error (server down, DNS failure, etc.)
			console.error(`Network error fetching ${endpoint}: ${error.message}`);
		} else {
			console.error(`Unexpected error fetching ${endpoint}: ${error.message}`);
		}

		// Return null to indicate failure, allowing calling functions to handle gracefully
		return null;
	}
};
