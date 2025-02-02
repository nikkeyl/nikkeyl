'use client';

import slider from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { extractFileName } from '@/helpers/extract-file-name';
import { reviews } from '@/mocks/reviews';
import { Controls } from '@/ui/controls/controls';
import { Title } from '@/ui/title/title';
import { ReviewCard } from '@/widgets/review-card/review-card';

import style from './reviews.module.scss';

const Reviews = () => {
  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));
  const [isScrollPrevious, setIsScrollPrevious] = useState(false);
  const [isScrollNext, setIsScrollNext] = useState(false);

  const translationsTitle = useTranslations('titles');
  const translationsReview = useTranslations('reviews');

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
        <Title title={translationsTitle('reviews')} />
        <Controls
          isScrollNext={isScrollNext}
          isScrollPrevious={isScrollPrevious}
          scrollNext={scrollNext}
          scrollPrevious={scrollPrevious}
        />
      </div>
      <div ref={sliderRef}>
        <ul className={style.slider}>
          {reviews.map(({ avatar, key, siteLink }) => (
            <li key={key} className={style.slide}>
              <ReviewCard
                avatar={avatar}
                name={translationsReview(`${extractFileName(avatar)}.name`)}
                siteLink={siteLink}
                text={translationsReview(`${extractFileName(avatar)}.text`)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Reviews };
