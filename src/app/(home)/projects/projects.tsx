'use client';

import clsx from 'clsx';
import slider from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { ArrowIcon } from '@/icons/arrow';
import { projects } from '@/mocks/projects';
import { Title } from '@/ui/title/title';
import { ProjectCard } from '@/widgets/project-card/project-card';

import style from './projects.module.scss';

const Projects = () => {
  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const translations = useTranslations('titles');

  const scrollPrev = useCallback(() => {
    if (sliderApi) sliderApi.scrollPrev();
  }, [sliderApi]);

  const scrollNext = useCallback(() => {
    if (sliderApi) sliderApi.scrollNext();
  }, [sliderApi]);

  const updateScrollState = useCallback(() => {
    if (sliderApi) {
      setCanScrollPrev(sliderApi.canScrollPrev());
      setCanScrollNext(sliderApi.canScrollNext());
    }
  }, [sliderApi]);

  useEffect(() => {
    if (sliderApi) {
      updateScrollState();

      sliderApi.on('select', updateScrollState);
      sliderApi.on('reInit', updateScrollState);
    }

    return () => {
      if (sliderApi) {
        sliderApi.off('select', updateScrollState);
        sliderApi.off('reInit', updateScrollState);
      }
    };
  }, [sliderApi, updateScrollState]);

  return (
    <section>
      <div className={style.head}>
        <Title title={translations('projects')} />
        <div className={style.controls}>
          <button
            aria-disabled={!canScrollPrev}
            className={style.button}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            type='button'
          >
            <ArrowIcon />
          </button>
          <button
            aria-disabled={!canScrollNext}
            className={clsx(style.button, style.rotate)}
            disabled={!canScrollNext}
            onClick={scrollNext}
            type='button'
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div ref={sliderRef} className={style.slider}>
        <ul className={style.projects}>
          {projects.map(({ alt, hosting, href, isCommerce, key, src, title }) => (
            <li key={key} className={style.project}>
              <ProjectCard
                alt={alt}
                hosting={hosting}
                href={href}
                isCommerce={isCommerce}
                src={src}
                title={title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects };
