import type { APIRoute } from 'astro';
import { perspectiveCookieName } from '@sanity/preview-url-secret/constants';

export const GET: APIRoute = ({ redirect, cookies }) => {
  cookies.delete(perspectiveCookieName, { path: '/' });
  return redirect('/', 307);
};
