import clsx from 'clsx';

import styles from './title.module.scss';
import type { Properties } from './title.properties';

const Title = (properties: Properties) => {
  const { title, level = 'h2', className } = properties;

  const TitleLevel = level;

  return <TitleLevel className={clsx(styles.title, className)}>{title}</TitleLevel>;
};

export { Title };
