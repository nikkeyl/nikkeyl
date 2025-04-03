import type { ReactNode } from 'react';

type Properties = {
  icon: () => ReactNode;
  text: string;
  now?: boolean | string;
  startDate?: string;
  jobLink?: string;
};

export type { Properties };
