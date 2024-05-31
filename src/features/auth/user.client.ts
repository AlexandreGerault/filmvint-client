import { apiFetch } from '@/lib/fetch-client';

import { userSchema } from './user.hybrid';

export async function fetchAuthenticatedUser() {
  const response = await apiFetch('/me');

  if (response.ok) {
    const user = await response.json();

    return userSchema.parse(user);
  }

  return Promise.reject(new Error('Not authenticated'));
}
