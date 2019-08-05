import { getClient } from './client';

export function signIn(email: string, password: string) {
  return getClient().post('/users/authenticate/', { email, password });
}

export function signUp(name: string, email: string, password: string) {
  return getClient().post('/users/register/', { name, email, password });
}
