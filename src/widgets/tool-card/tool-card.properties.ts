import type { ComponentProps } from 'react';

type Properties = ComponentProps<'img'> & {
  title: string;
};

export type { Properties };
