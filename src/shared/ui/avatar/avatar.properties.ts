import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Properties = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src: string;
  alt: string;
};

export type { Properties };
