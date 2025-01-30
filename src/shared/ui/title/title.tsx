import clsx from 'clsx';

import styles from './title.module.scss';
import type { Properties } from './title.properties';

const Title = (properties: Properties) => {
  const { className, level = 'h2', title } = properties;

  const TitleLevel = level;

  return <TitleLevel className={clsx(styles.title, className)}>{title}</TitleLevel>;
};

export { Title };
