import clsx from 'clsx';

import { ArrowIcon } from '@/icons/arrow';

import style from './controls.module.scss';
import type { Properties } from './controls.properties';

const Controls = (properties: Properties) => {
  const { isScrollNext, isScrollPrevious, scrollNext, scrollPrevious } = properties;

  return (
    <div className={style.controls}>
      <button
        aria-disabled={!isScrollPrevious}
        aria-label='Previous Slide'
        className={style.button}
        disabled={!isScrollPrevious}
        onClick={scrollPrevious}
        title='Previous Slide'
        type='button'
      >
        <ArrowIcon />
      </button>
      <button
        aria-disabled={!isScrollNext}
        aria-label='Next Slide'
        className={clsx(style.button, style.rotate)}
        disabled={!isScrollNext}
        onClick={scrollNext}
        title='Next Slide'
        type='button'
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export { Controls };
