import { PropsWithChildren } from 'react';

export function SectionTitle({ children }: PropsWithChildren) {
  return <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{children}</h2>;
}
