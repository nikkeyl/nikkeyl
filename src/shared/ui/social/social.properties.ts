import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type Properties = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  icon: ReactNode;
};

export type { Properties };
