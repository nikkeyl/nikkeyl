import { getTranslations } from 'next-intl/server';

import { Title } from '@/ui/title/title';

import style from './tools.module.scss';

const Tools = async () => {
  const translations = await getTranslations('titles');

  return (
    <section>
      <Title title={translations('tools')} />
    </section>
  );
};

export { Tools };
