import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type Properties = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  text: string;
};

export type { Properties };
