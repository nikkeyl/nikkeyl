import type { PropsWithChildren } from 'react';

type Properties = PropsWithChildren & {
  className?: string;
  color?: 'blue';
  fontWeight?: 'bold';
};

export type { Properties };
