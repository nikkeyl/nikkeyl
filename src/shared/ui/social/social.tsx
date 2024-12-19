import styles from './social.module.scss';
import type { Properties } from './social.properties';

const Social = (properties: Properties) => {
  const { href, icon } = properties;

  return (
    <a className={styles.wrapper} href={href}>
      {icon}
    </a>
  );
};

export { Social };
