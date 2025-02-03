import { useTranslations } from 'next-intl';

import { Title } from '../title/title';
import style from './head.module.scss';
import type { Properties } from './head.properties';

const Head = (properties: Properties) => {
  const { children, title } = properties;

  const translations = useTranslations('titles');

  return (
    <div className={style.wrapper}>
      <Title title={translations(title)} />
      {children}
    </div>
  );
};

export { Head };
