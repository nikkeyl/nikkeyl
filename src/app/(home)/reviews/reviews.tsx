import { getTranslations } from 'next-intl/server';

import { Title } from '@/ui/title/title';

import style from './reviews.module.scss';

const Reviews = async () => {
  const translations = await getTranslations('titles');

  return (
    <section>
      <Title title={translations('reviews')} />
    </section>
  );
};

export { Reviews };
