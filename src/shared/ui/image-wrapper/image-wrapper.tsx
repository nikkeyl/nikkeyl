import Image from 'next/image';

import styles from './image-wrapper.module.scss';
import type { Properties } from './image-wrapper.properties';

const ImageWrapper = (properties: Properties) => {
  const { src, alt } = properties;

  return (
    <div className={styles.wrapper}>
      <Image alt={alt} fetchPriority='high' fill priority src={src} />
    </div>
  );
};

export { ImageWrapper };
