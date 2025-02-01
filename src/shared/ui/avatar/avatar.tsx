import Image from 'next/image';

import { blur } from '@/config/constants';

import { Title } from '../title/title';
import style from './avatar.module.scss';
import type { Properties } from './avatar.properties';

const Avatar = (properties: Properties) => {
  const { alt, src } = properties;

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

export { Avatar };
