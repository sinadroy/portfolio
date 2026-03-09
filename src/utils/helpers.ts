/**
 * Common utility / helper functions.
 */

/**
 * Concatenate CSS class names, filtering out falsy values.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

/**
 * Format a date to a human-readable string.
 */
export function formatDate(date: Date | string, locale = 'en-US'): string {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));
}

/**
 * Capitalize the first letter of a string.
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
