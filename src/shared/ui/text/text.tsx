import clsx from 'clsx';

import styles from './text.module.scss';
import type { Properties } from './text.properties';

const Text = (properties: Properties) => {
  const { children, color } = properties;

  return <p className={clsx(styles.text, color && styles[color])}>{children}</p>;
};

export { Text };
