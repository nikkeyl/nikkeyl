import clsx from 'clsx';

import style from './title.module.scss';
import type { Properties } from './title.properties';

const Title = (properties: Properties) => {
  const { className, color, level = 'h2', title } = properties;

  const TitleLevel = level;

  return (
    <TitleLevel
      className={clsx(
        style.title,
        level && style[level],
        color && style[color],
        className,
      )}
      title={title}
    >
      {title}
    </TitleLevel>
  );
};

export { Title };
