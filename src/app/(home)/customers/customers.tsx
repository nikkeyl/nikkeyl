'use client';

import slider from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';

import { defaultSliderOptions } from '@/config/default-slider-options';
import { extractFileName } from '@/helpers/extract-file-name';
import { customers } from '@/mocks/customers';
import { Controls } from '@/ui/controls/controls';
import { Head } from '@/ui/head/head';
import { Slider } from '@/ui/slider/slider';
import { CustomerCard } from '@/widgets/customer-card/customer-card';

import style from './customers.module.scss';

const Customers = () => {
  const [sliderRef, sliderApi] = slider(Object.assign(defaultSliderOptions));
  const [isScrollPrevious, setIsScrollPrevious] = useState(false);
  const [isScrollNext, setIsScrollNext] = useState(false);

  const translations = useTranslations('customers');

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
      <Head title='customers'>
        <Controls
          isScrollNext={isScrollNext}
          isScrollPrevious={isScrollPrevious}
          scrollNext={scrollNext}
          scrollPrevious={scrollPrevious}
        />
      </Head>
      <Slider ref={sliderRef}>
        {customers.map(({ avatar, key, siteLink }) => (
          <li key={key}>
            <CustomerCard
              avatar={avatar}
              name={translations(`${extractFileName(avatar)}.name`)}
              siteLink={siteLink}
              text={translations(`${extractFileName(avatar)}.text`)}
            />
          </li>
        ))}
      </Slider>
    </section>
  );
};

export { Customers };
