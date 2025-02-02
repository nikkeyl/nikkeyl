import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type Properties = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  title: string;
};

export type { Properties };
