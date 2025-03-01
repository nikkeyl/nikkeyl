import type { ComponentProps } from 'react';

type Properties = ComponentProps<'h1'> & {
  text: string;
  level?: 'h1' | 'h2' | 'h3';
  direction?: 'vertical';
};

export type { Properties };
