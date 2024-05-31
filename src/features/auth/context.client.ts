'use client';

import React, { createContext } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchAuthenticatedUser } from './user.client';
import { User } from './user.hybrid';

export const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user } = useQuery({
    queryKey: ['auth'],
    queryFn: fetchAuthenticatedUser,
  });

  return React.createElement(AuthContext.Provider, { value: user ?? null }, children);
}
