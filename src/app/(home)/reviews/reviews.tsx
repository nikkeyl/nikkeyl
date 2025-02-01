'use client';

import clsx from 'clsx';
import slider from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { ArrowIcon } from '@/icons/arrow';
import { reviews } from '@/mocks/reviews';
import { Title } from '@/ui/title/title';
import { ReviewCard } from '@/widgets/review-card/review-card';

import style from './reviews.module.scss';

const Reviews = () => {
  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));

  const translations = useTranslations('titles');

  const scrollPrev = useCallback(() => {
    if (sliderApi) sliderApi.scrollPrev();
  }, [sliderApi]);

  const scrollNext = useCallback(() => {
    if (sliderApi) sliderApi.scrollNext();
  }, [sliderApi]);

  return (
    <section>
      <div className={style.head}>
        <Title title={translations('reviews')} />
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
      <div ref={sliderRef} className={style.slider}>
        <ul className={style.reviews}>
          {reviews.map(({ avatar, key, siteLink, text }) => (
            <li key={key} className={style.review}>
              <ReviewCard avatar={avatar} siteLink={siteLink} text={text} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Reviews };
