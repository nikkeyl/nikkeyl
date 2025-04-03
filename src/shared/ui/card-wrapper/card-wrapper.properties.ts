import type { ComponentProps } from 'react';

type Properties = ComponentProps<'a'> & {
  ariaLabel?: string;
  type?: 'a' | 'div';
};

export type { Properties };
