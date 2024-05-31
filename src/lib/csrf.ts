import { apiFetch } from './fetch-client';
import { getCookie } from './utils';

export async function csrf() {
  await apiFetch('/csrf');

  return getCookie('XSRF-TOKEN');
}
