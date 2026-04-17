import type { APIRoute } from 'astro';
import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { sanityClient } from 'sanity:client';
import { perspectiveCookieName } from '@sanity/preview-url-secret/constants';

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const clientWithToken = sanityClient.withConfig({
    token: import.meta.env.SANITY_API_READ_TOKEN,
  });

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url
  );

  if (!isValid) {
    return new Response('Invalid preview URL', { status: 403 });
  }

  cookies.set(perspectiveCookieName, 'previewDrafts', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    path: '/',
  });

  return redirect(redirectTo, 307);
};
