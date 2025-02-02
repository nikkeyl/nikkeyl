'use client';

import slider from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { projects } from '@/mocks/projects';
import { Controls } from '@/ui/controls/controls';
import { Title } from '@/ui/title/title';
import { ProjectCard } from '@/widgets/project-card/project-card';

import style from './projects.module.scss';

const Projects = () => {
  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));
  const [isScrollPrevious, setIsScrollPrevious] = useState(false);
  const [isScrollNext, setIsScrollNext] = useState(false);

  const translations = useTranslations('titles');

  const scrollPrevious = useCallback(() => {
    if (sliderApi) sliderApi.scrollPrev();
  }, [sliderApi]);

  const scrollNext = useCallback(() => {
    if (sliderApi) sliderApi.scrollNext();
  }, [sliderApi]);

  const updateScrollState = useCallback(() => {
    if (sliderApi) {
      setIsScrollPrevious(sliderApi.canScrollPrev());
      setIsScrollNext(sliderApi.canScrollNext());
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
        <Controls
          isScrollNext={isScrollNext}
          isScrollPrevious={isScrollPrevious}
          scrollNext={scrollNext}
          scrollPrevious={scrollPrevious}
        />
      </div>
      <div ref={sliderRef}>
        <ul className={style.slider}>
          {projects.map(({ alt, hosting, href, isCommerce, key, src, title }) => (
            <li key={key} className={style.slide}>
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
