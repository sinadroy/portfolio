/**
 * Shared type definitions used across the application.
 */

export interface NavItem {
    label: string;
    path: string;
    icon?: string;
}

export interface SeoMeta {
    title: string;
    description: string;
    keywords?: string[];
}
