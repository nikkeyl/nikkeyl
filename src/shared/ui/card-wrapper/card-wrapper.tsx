import clsx from 'clsx';

import style from './card-wrapper.module.scss';
import type { Properties } from './card-wrapper.properties';

const CardWrapper = (properties: Properties) => {
  const { children, className, href, title, type = 'div' } = properties;

  return type === 'div' ? (
    <div className={clsx(style.wrapper, className)} title={title}>
      {children}
    </div>
  ) : (
    <a
      className={clsx(style.wrapper, className)}
      href={href}
      rel='nofollow noreferrer'
      target='_blank'
      title={title}
    >
      {children}
    </a>
  );
};

export { CardWrapper };
