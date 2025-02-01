'use client';

import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react'; // Добавлен useCallback

import { ArrowIcon } from '@/icons/arrow';
import { Title } from '@/ui/title/title';
import { ProjectCard } from '@/widgets/project-card/project-card';

import style from './projects.module.scss';

const Projects = () => {
  const [projects, setProjects] = useState<{ src: string; key: number }[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', startIndex: 0 });

  const translations = useTranslations('titles');

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
      <div className={style.head}>
        <Title title={translations('projects')} />
        <div className={style.controls}>
          <button className={style.button} onClick={scrollPrev} type='button'>
            <ArrowIcon />
          </button>
          <button
            className={clsx(style.button, style.rotate)}
            onClick={scrollNext}
            type='button'
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div ref={emblaRef} className={style.slider}>
        <ul className={style.projects}>
          {projects.map(({ key, src }) => (
            <li key={key} className={style.project}>
              <ProjectCard alt={src} hosting='github' href='' isCommerce src={src} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects };
