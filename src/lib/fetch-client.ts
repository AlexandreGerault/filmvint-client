import { publicEnv } from './env';

const API_BASE_URL = publicEnv.NEXT_PUBLIC_API_URL;

export function apiFetch(path: string, options: RequestInit = {}) {
  const url = new URL(path, API_BASE_URL);

  return fetch(url, {
    credentials: 'include',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
}
