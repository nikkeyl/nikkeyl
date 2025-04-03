'use client';

import clsx from 'clsx';
import slider from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { ArrowIcon } from '@/icons/arrow';
import { Title } from '@/ui/title/title';

import style from './slider.module.scss';
import { Properties } from './slider.properties';

const Slider = (properties: Properties) => {
  const { children, title } = properties;

  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));
  const [isScrollPrevious, setIsScrollPrevious] = useState(false);
  const [isScrollNext, setIsScrollNext] = useState(false);

  const translationsTitle = useTranslations('titles');
  const translationsArrows = useTranslations('arrows');

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
      <div className={style.head}>
        <Title text={translationsTitle(title ?? '')} />
        {(isScrollPrevious || isScrollNext) && (
          <div className={style.controls}>
            <button
              aria-disabled={!isScrollPrevious}
              aria-label={translationsArrows('previous')}
              className={style.button}
              disabled={!isScrollPrevious}
              onClick={scrollPrevious}
              title={isScrollPrevious ? translationsArrows('previous') : ''}
              type='button'
            >
              <ArrowIcon />
            </button>
            <button
              aria-disabled={!isScrollNext}
              aria-label={translationsArrows('next')}
              className={clsx(style.button, style.rotate)}
              disabled={!isScrollNext}
              onClick={scrollNext}
              title={isScrollNext ? translationsArrows('next') : ''}
              type='button'
            >
              <ArrowIcon />
            </button>
          </div>
        )}
      </div>
      <div ref={sliderRef}>
        <ul className={style.slider}>{children}</ul>
      </div>
    </section>
  );
};

export { Slider };
