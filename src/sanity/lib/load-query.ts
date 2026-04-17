import { sanityClient } from 'sanity:client';
import type { QueryParams } from '@sanity/client';
import { isInDraftMode } from './draft-mode';

export async function loadQuery<T>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<T> {
  const perspective = isInDraftMode() ? 'previewDrafts' : 'published';
  const result = await sanityClient.fetch<T>(query, params, {
    perspective,
    stega: isInDraftMode(),
  });
  return result;
}
