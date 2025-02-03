'use client';

import slider from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { Controls } from '@/ui/controls/controls';

import { Head } from '../head/head';
import style from './slider.module.scss';
import { Properties } from './slider.properties';

const Slider = (properties: Properties) => {
  const { children, title } = properties;

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
    <section className={style.wrapper}>
      {title && (
        <Head title={title}>
          <Controls
            isScrollNext={isScrollNext}
            isScrollPrevious={isScrollPrevious}
            scrollNext={scrollNext}
            scrollPrevious={scrollPrevious}
          />
        </Head>
      )}
      <div ref={sliderRef}>
        <ul className={style.slider}>{children}</ul>
      </div>
    </section>
  );
};

export { Slider };
