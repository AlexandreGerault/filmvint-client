import { csrf } from '@/lib/csrf';
import { apiFetch } from '@/lib/fetch-client';

interface RegisterPayload {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  password_confirmation: string;
}

export async function register(payload: RegisterPayload) {
  const xsrfToken = await csrf();

  const response = await apiFetch('/register', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': xsrfToken,
    },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if (response.ok) {
    return (await response.json()) as {};
  }

  const errors = (await response.json()) as { errors: { email: string } };

  return Promise.reject(errors);
}
