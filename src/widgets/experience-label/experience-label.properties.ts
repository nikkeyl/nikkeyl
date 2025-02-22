import type { ReactNode } from 'react';

type Properties = {
  icon: () => ReactNode;
  text: string;
  startDate: string;
  jobLink?: string;
};

export type { Properties };
