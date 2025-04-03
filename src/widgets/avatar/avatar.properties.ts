import type { ComponentProps } from 'react';

type Properties = ComponentProps<'div'> & {
  src: string;
  alt: string;
};

export type { Properties };
