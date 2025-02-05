import type { PropsWithChildren } from 'react';

import style from './marquee.module.scss';

const Marquee = (properties: PropsWithChildren) => {
  const { children } = properties;

  return (
    <div className={style.wrapper}>
      {children}
      {children}
    </div>
  );
};

export { Marquee };
