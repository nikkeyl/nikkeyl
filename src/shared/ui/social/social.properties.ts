import type { ComponentProps, ReactNode } from 'react';

type Properties = ComponentProps<'a'> & {
  ariaLabel: string;
  icon: () => ReactNode;
};

export type { Properties };
