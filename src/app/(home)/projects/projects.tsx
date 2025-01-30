import { getTranslations } from 'next-intl/server';

import { Title } from '@/ui/title/title';

import style from './projects.module.scss';

const Projects = async () => {
  const translations = await getTranslations('titles');

  return (
    <section>
      <Title title={translations('projects')} />
    </section>
  );
};

export { Projects };
