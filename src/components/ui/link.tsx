import { LinkHTMLAttributes, PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

interface Props
  extends VariantProps<typeof linkVariants>,
    LinkProps,
    PropsWithChildren<Pick<LinkHTMLAttributes<HTMLLinkElement>, 'className'>> {}

const linkVariants = cva('font-semibold transition', {
  variants: {
    variant: {
      default: 'underline-offset-4 hover:underline',
      primary: 'text-primary underline-offset-4 hover:underline',
      'primary-button':
        'rounded-md bg-primary px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export function Link({ variant, className, ...props }: Props) {
  return <NextLink className={cn(linkVariants({ variant, className }))} {...props} />;
}

export type { Props as LinkProps };
