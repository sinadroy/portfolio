/**
 * Application-wide constants and configuration helpers.
 */

export const APP_NAME = 'Portfolio';

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    PROJECTS: '/projects',
    CONTACT: '/contact',
    DOCUMENTATION: '/documentation',
} as const;

export const NAV_ITEMS = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Projects', path: ROUTES.PROJECTS },
    { label: 'Contact', path: ROUTES.CONTACT },
    { label: 'Documentation', path: ROUTES.DOCUMENTATION },
];
