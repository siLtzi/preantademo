import { perspectiveCookieName } from '@sanity/preview-url-secret/constants';

let _cookies: Record<string, string> = {};

export function setServerCookies(cookies: Record<string, string>) {
  _cookies = cookies;
}

export function isInDraftMode(): boolean {
  return _cookies[perspectiveCookieName] === 'previewDrafts';
}
