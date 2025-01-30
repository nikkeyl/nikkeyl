import { PropsWithChildren } from 'react';

import style from './content.module.scss';

const Content = ({ children }: PropsWithChildren) => (
  <main className={style.wrapper}>{children}</main>
);

export { Content };
