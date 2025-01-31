import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Properties = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  title: string;
  level?: 'h1' | 'h2' | 'h3';
  color?: 'dark';
};

export type { Properties };
