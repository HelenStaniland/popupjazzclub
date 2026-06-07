export const MAILERLITE_ACCOUNT_ID = "2411983";
export const MAILERLITE_JOIN_FORM_ID = "OPnT1k";
export const MAILERLITE_UNIVERSAL_SRC =
  "https://assets.mailerlite.com/js/universal.js";

export const JOIN_PAGE_PATH = "/join";

export function isJoinPagePath(href: string) {
  return (
    href === JOIN_PAGE_PATH ||
    href.startsWith(`${JOIN_PAGE_PATH}?`) ||
    href.startsWith(`${JOIN_PAGE_PATH}#`)
  );
}
