/**
 * All the routes for the application.
 */
export const ROUTES = {
	ROOT: "/",

  // Public routes
	HOME: "/home",
	ABOUT_US: "/about-us",
	CONTACT_US: "/contact-us",
	EVENTS: "/events",
	EVENT_POST: "/events/:id",
	PROJECTS: "/projects",
	SEARCH_RESULT: "/search-result",
	LOGIN: "/login",

  // Private routes
	DASHBOARD: "/dashboard",

  // Error routes
	ERROR: "*",
};
