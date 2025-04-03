import type { ComponentProps } from 'react';

type Properties = ComponentProps<'a'> &
  ComponentProps<'img'> & {
    title: string;
    index: number;
    isGitHub?: boolean;
    isVercel?: boolean;
    isCommerce?: boolean;
  };

export type { Properties };
