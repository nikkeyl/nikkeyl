import { PropsWithChildren } from 'react';

import style from './wrapper.module.scss';

const Wrapper = ({ children }: PropsWithChildren) => (
  <div className={style.wrapper}>{children}</div>
);

export { Wrapper };
