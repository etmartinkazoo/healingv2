import type { ImageMetadata } from "astro";

const allImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/images/*.{webp,jpg,jpeg,png,avif}",
	{ eager: true },
);

/**
 * Resolves an image path string (as stored by Pages CMS) to an Astro ImageMetadata object.
 * Accepts paths like "src/assets/images/IMG_7280.webp" or "/src/assets/images/IMG_7280.webp".
 */
export function resolveImage(path: string): ImageMetadata {
	const normalized = path.startsWith("/") ? path : `/${path}`;
	const match = allImages[normalized];
	if (!match) {
		throw new Error(`Image not found: ${path}`);
	}
	return match.default;
}
