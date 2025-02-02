import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from 'react';

type Properties = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    title: string;
    hosting: string;
    isCommerce?: boolean;
  };

export type { Properties };
