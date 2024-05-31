import { PropsWithChildren } from 'react';

export function PageTitle({ children }: PropsWithChildren) {
  return <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{children}</h1>;
}
