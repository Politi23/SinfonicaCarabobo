import { AstroGlob } from "astro";

/**
 * Interface for navigation items
 */
interface NavItem {
	href: string;
	label: string;
	dropdown?: NavItem[];
}

/**
 * Generate navigation structure from pages directory
 * Excludes special files like [slug].astro and [page].astro
 */
export async function generateNavigation(): Promise<NavItem[]> {
	// Get all Astro pages, excluding dynamic routes and special files
	const pages = import.meta.glob("/src/pages/**/*.astro", { eager: true });

	// Define files to exclude
	const excludePatterns = [
		"/src/pages/404.astro",
		"/src/pages/blog/[slug].astro",
		"/src/pages/blog/page/[page].astro",
	];

	// Create a map to store the navigation structure
	const navMap = new Map<string, NavItem>();

	// Process each page
	for (const [path, module] of Object.entries(pages)) {
		// Skip excluded files
		if (excludePatterns.includes(path)) {
			continue;
		}

		// Convert file path to URL path
		let urlPath = path
			.replace("/src/pages", "") // Remove base path
			.replace(/\/index\.astro$/, "/") // Convert index files to directory
			.replace(/\.astro$/, "") // Remove .astro extension
			.replace(/^\/index$/, "/") // Root index to /
			.replace(/\/$/, ""); // Remove trailing slash except for root

		// Special handling for root index
		if (urlPath === "") {
			urlPath = "/";
		}

		// Extract the directory path and filename
		const parts = urlPath.split("/").filter(Boolean);
		const fileName = parts.length > 0 ? parts[parts.length - 1] : "";
		const dirPath = parts.length > 1 ? "/" + parts.slice(0, -1).join("/") : "/";

		// Create a readable label from the path
		let label = "";
		if (fileName) {
			// Convert filename to readable label
			label = fileName
				.replace(/-/g, " ") // Replace hyphens with spaces
				.split(" ")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
				.join(" ");
		} else {
			// For root path
			label = "Home";
		}

		// Special cases for known paths
		switch (urlPath) {
			case "/":
				label = "Inicio";
				break;
			case "/nosotros":
				label = "Nosotros";
				break;
			case "/agrupaciones":
				label = "Agrupaciones";
				break;
			case "/programas":
				label = "Programas";
				break;
			case "/blog":
				label = "Blog";
				break;
			case "/libro":
				label = "Libro";
				break;
			case "/apoyanos":
				label = "Apóyanos";
				break;
			case "/contacto":
				label = "Contacto";
				break;
			case "/nosotros/reconocimientos":
				label = "Reconocimientos";
				break;
			case "/nosotros/discografia":
				label = "Discografia";
				break;
			case "/nosotros/fosc":
				label = "FOSC";
				break;
			case "/nosotros/osc":
				label = "OSC";
				break;
		}

		// Create the navigation item
		const navItem: NavItem = {
			href: urlPath,
			label: label,
		};

		// Add to the navigation map
		if (dirPath === "/") {
			// Top level item
			navMap.set(urlPath, navItem);
		} else {
			// Child item - need to add to parent's dropdown
			const parentPath = dirPath;
			let parentItem = navMap.get(parentPath);

			if (!parentItem) {
				// Create parent if it doesn't exist
				const parentLabel = parentPath
					.replace(/^\//, "")
					.replace(/-/g, " ")
					.split(" ")
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(" ");

				parentItem = {
					href: parentPath,
					label: parentLabel,
					dropdown: [],
				};
				navMap.set(parentPath, parentItem);
			}

			// Ensure parent has dropdown property
			if (!parentItem.dropdown) {
				parentItem.dropdown = [];
			}

			// Add current item to parent's dropdown
			parentItem.dropdown.push(navItem);
		}
	}

	// Convert map to array and sort
	const navArray = Array.from(navMap.values()).sort((a, b) => {
		// Define a custom order for certain items
		const order = [
			"/",
			"/nosotros",
			"/agrupaciones",
			"/programas",
			"/blog",
			"/libro",
			"/apoyanos",
			"/contacto",
		];
		const aIndex = order.indexOf(a.href);
		const bIndex = order.indexOf(b.href);

		if (aIndex !== -1 && bIndex !== -1) {
			return aIndex - bIndex;
		} else if (aIndex !== -1) {
			return -1;
		} else if (bIndex !== -1) {
			return 1;
		} else {
			return a.href.localeCompare(b.href);
		}
	});

	return navArray;
}
