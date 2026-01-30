export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Healing Earth Design",
	// Your website's title and description (meta fields)
	title: "Healing Earth Design - Sustainable Garden & Landscape Design",
	description:
		"Healing Earth Design helps homeowners create beautiful, functional gardens rooted in ecology, sustainability, and care for the land.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Sarah Martin",
		email: "creator@cosmicthemes.com",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Healing Earth Design logo",
	},
};

export default siteData;
