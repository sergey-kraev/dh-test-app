import { URL_CONTENT } from './constants';
import { Folder } from './types';

export async function getContent(dirId?: number): Promise<Folder> {
  const url = new URL(URL_CONTENT)
  if (dirId) {
    url.search = new URLSearchParams({ dirId: dirId.toString() }).toString();
  }
  const response = await fetch(url.toString())
  return response.json()
}
