import Image from 'next/image';

import { Title } from '../title/title';
import style from './image-wrapper.module.scss';
import type { Properties } from './image-wrapper.properties';

const ImageWrapper = (properties: Properties) => {
  const { alt, src } = properties;

  const blur = 'UklGRhwAAABXRUJQVlA4TBAAAAAvY8AYAAcQ/S9P/wMR0f8A';

  return (
    <div className={style.wrapper}>
      <Title className={style.title} level='h1' title='nikkeyl' />
      <Image
        alt={alt}
        blurDataURL={`data:image/webp;base64,${blur}`}
        fetchPriority='high'
        fill
        placeholder='blur'
        priority
        src={src}
      />
    </div>
  );
};

export { ImageWrapper };
