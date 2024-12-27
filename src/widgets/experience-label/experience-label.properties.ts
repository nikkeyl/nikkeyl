import type { ReactNode } from 'react';

type Properties = {
  icon: () => ReactNode;
  text: string;
  startDate: string;
};

export type { Properties };
