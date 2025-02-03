import { useTranslations } from 'next-intl';

import { Text } from '../text/text';
import style from './loader.module.scss';
import type { Properties } from './loader.properties';

const Loader = (properties: Properties) => {
  const { text } = properties;

  const translations = useTranslations('text');

  return (
    <div className={style.wrapper}>
      <Text>{translations(text)}</Text>
    </div>
  );
};

export { Loader };
