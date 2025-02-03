'use client';

import slider from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { projects } from '@/mocks/projects';
import { Controls } from '@/ui/controls/controls';
import { Head } from '@/ui/head/head';
import { Slider } from '@/ui/slider/slider';
import { ProjectCard } from '@/widgets/project-card/project-card';

const Projects = () => {
  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));
  const [isScrollPrevious, setIsScrollPrevious] = useState(false);
  const [isScrollNext, setIsScrollNext] = useState(false);

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
      <Head title='projects'>
        <Controls
          isScrollNext={isScrollNext}
          isScrollPrevious={isScrollPrevious}
          scrollNext={scrollNext}
          scrollPrevious={scrollPrevious}
        />
      </Head>
      <Slider ref={sliderRef}>
        {projects.map(({ alt, hosting, href, isCommerce, key, src, title }) => (
          <li key={key}>
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
      </Slider>
    </section>
  );
};

export { Projects };
