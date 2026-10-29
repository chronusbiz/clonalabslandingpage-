/**
 * Site visibility toggles — flip these to show/hide sections.
 *
 * Clonalabs does not publish careers, webinars, or founder/leadership
 * content, so every flag is off.
 */
export const SHOW_FOUNDER_CONTENT = false;
export const SHOW_WEBINARS = false;
export const SHOW_CAREERS = false;

/** Filter footer/nav links that depend on visibility flags. */
export function isLinkVisible(href: string): boolean {
  if (!SHOW_WEBINARS && href === "/webinars") return false;
  if (!SHOW_CAREERS && (href === "/careers" || href.startsWith("/careers/"))) return false;
  if (!SHOW_FOUNDER_CONTENT && href === "/about#leadership") return false;
  return true;
}
