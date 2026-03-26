export const domain = import.meta.env.WP_DOMAIN || "http://localhost:10004";
export const wpGraphQLEndpoint = `${domain}/graphql`;

const DEFAULT_TIMEOUT = 10000;

type GraphQLError = {
  message?: string;
};

type GraphQLResponse<T = unknown> = {
  data?: T;
  errors?: GraphQLError[];
};

export const fetchGraphQL = async <TData>(
  query: string,
  variables: Record<string, unknown> = {},
  timeout: number = DEFAULT_TIMEOUT,
): Promise<TData | null> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(wpGraphQLEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error(
        `GraphQL HTTP error: ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const json = (await response.json()) as GraphQLResponse<TData>;

    if (!json || typeof json !== "object") {
      console.error("GraphQL invalid JSON response");
      return null;
    }

    if (Array.isArray(json.errors) && json.errors.length > 0) {
      const message = json.errors[0]?.message || "Unknown GraphQL error";
      console.error(`GraphQL error: ${message}`);
      return null;
    }

    if (!json.data) {
      console.error("GraphQL response missing data field");
      return null;
    }

    return json.data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error(`GraphQL request timeout after ${timeout}ms`);
      return null;
    }

    console.error("GraphQL request failed:", error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};
