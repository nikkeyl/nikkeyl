import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type Properties = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  ariaLabel: string;
  icon: () => ReactNode;
};

export type { Properties };
