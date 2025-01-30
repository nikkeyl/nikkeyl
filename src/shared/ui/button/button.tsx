import style from './button.module.scss';
import type { Properties } from './button.properties';

const Button = (properties: Properties) => {
  const { href, text } = properties;

  return (
    <a
      className={style.wrapper}
      href={href}
      rel='nofollow noreferrer'
      target='_blank'
    >
      {text}
    </a>
  );
};

export { Button };
