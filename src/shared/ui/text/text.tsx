import clsx from 'clsx';

import style from './text.module.scss';
import type { Properties } from './text.properties';

const Text = (properties: Properties) => {
  const { children, color } = properties;

  return <p className={clsx(style.text, color && style[color])}>{children}</p>;
};

export { Text };
