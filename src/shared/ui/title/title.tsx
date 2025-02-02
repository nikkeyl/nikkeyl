import clsx from 'clsx';

import style from './title.module.scss';
import type { Properties } from './title.properties';

const Title = (properties: Properties) => {
  const { className, direction, level = 'h2', title } = properties;

  const TitleLevel = level;

  return (
    <TitleLevel
      className={clsx(
        style.title,
        level && style[level],
        direction && style[direction],
        className,
      )}
    >
      {title}
    </TitleLevel>
  );
};

export { Title };
