'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Title } from '@/ui/title/title';
import { ProjectCard } from '@/widgets/project-card/project-card';

import style from './projects.module.scss';

const Projects = () => {
  const [projects, setProjects] = useState<{ src: string; key: number }[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', startIndex: 0 });

  const translations = useTranslations('titles');

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/get-projects-images');
      const project = await response.json();

      const projectsList = project.map((src: string, key: number) => ({
        src,
        key,
      }));

      setProjects(projectsList);
    };

    fetchProjects();
  }, []);

  return (
    <section>
      <Title className={style.title} title={translations('projects')} />
      <div ref={emblaRef} className={style.slider}>
        <ul className={style.projects}>
          {projects.map(({ key, src }) => (
            <li key={key} className={style.project}>
              <ProjectCard alt={src} href='' src={src} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects };
