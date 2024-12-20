import Image from 'next/image';

import styles from './image-wrapper.module.scss';
import type { Properties } from './image-wrapper.properties';

const ImageWrapper = (properties: Properties) => {
  const { src, alt } = properties;

  const blur = 'UklGRhwAAABXRUJQVlA4TBAAAAAvY8AYAAcQ/S9P/wMR0f8A';

  return (
    <div className={styles.wrapper}>
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
