import style from './social.module.scss';
import type { Properties } from './social.properties';

const Social = (properties: Properties) => {
  const { href, icon } = properties;

  const Icon = icon;

  return (
    <a
      className={style.wrapper}
      href={href}
      rel='nofollow noreferrer'
      target='_blank'
    >
      <Icon />
    </a>
  );
};

export { Social };
