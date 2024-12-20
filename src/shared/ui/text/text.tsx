import clsx from 'clsx';

import styles from './text.module.scss';
import type { Properties } from './text.properties';

const Text = (properties: Properties) => {
  const { children, className, color, fontWeight } = properties;

  return (
    <p
      className={clsx(
        styles.text,
        color && styles[color],
        fontWeight && styles[fontWeight],
        className,
      )}
    >
      {children}
    </p>
  );
};

export { Text };
