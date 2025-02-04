import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

type Properties = PropsWithChildren &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    ariaLabel?: string;
    type?: 'a' | 'div';
  };

export type { Properties };
