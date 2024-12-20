import clsx from 'clsx';

import styles from './text.module.scss';
import type { Properties } from './text.properties';

const Text = (properties: Properties) => {
  const { children, className, color } = properties;

  return (
    <p
      className={clsx(
        styles.text,
        color && styles[color],
        className,
      )}
    >
      {children}
    </p>
  );
};

export { Text };
