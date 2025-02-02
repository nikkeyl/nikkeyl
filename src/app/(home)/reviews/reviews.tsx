'use client';

import clsx from 'clsx';
import slider from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { extractFileName } from '@/helpers/extract-file-name';
import { ArrowIcon } from '@/icons/arrow';
import { reviews } from '@/mocks/reviews';
import { Title } from '@/ui/title/title';
import { ReviewCard } from '@/widgets/review-card/review-card';

import style from './reviews.module.scss';

const Reviews = () => {
  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const translationsTitle = useTranslations('titles');
  const translationsReview = useTranslations('reviews');

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
        <Title title={translationsTitle('reviews')} />
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
      <div ref={sliderRef}>
        <ul className={style.reviews}>
          {reviews.map(({ avatar, key, siteLink }) => (
            <li key={key} className={style.review}>
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
