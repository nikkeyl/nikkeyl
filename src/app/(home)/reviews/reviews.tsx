import { useTranslations } from 'next-intl';

import { Title } from '@/ui/title/title';

import style from './reviews.module.scss';

const Reviews = () => {
  const translations = useTranslations('titles');

  return (
    <section>
      <Title title={translations('reviews')} />
    </section>
  );
};

export { Reviews };
