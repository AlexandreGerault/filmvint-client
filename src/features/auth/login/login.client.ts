import { csrf } from '@/lib/csrf';
import { apiFetch } from '@/lib/fetch-client';

export async function login({ email, password }: { email: string; password: string }) {
  const xsrfToken = await csrf();

  const response = await apiFetch('/login', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': xsrfToken,
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (response.ok) {
    return (await response.json()) as {};
  }

  const errors = (await response.json()) as { errors: { email: string } };

  return Promise.reject(errors);
}
