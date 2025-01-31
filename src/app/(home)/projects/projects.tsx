import { useTranslations } from 'next-intl';

import { Title } from '@/ui/title/title';

import style from './projects.module.scss';

const Projects = () => {
  const translations = useTranslations('titles');

  return (
    <section>
      <Title title={translations('projects')} />
    </section>
  );
};

export { Projects };
