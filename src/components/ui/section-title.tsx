import { PropsWithChildren } from "react";

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
      {children}
    </h2>
  );
}
