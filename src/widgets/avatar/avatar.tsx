import Image from 'next/image';

import { author, blur } from '@/config/constants';

import { CardWrapper } from '../../shared/ui/card-wrapper/card-wrapper';
import { Title } from '../../shared/ui/title/title';
import style from './avatar.module.scss';
import type { Properties } from './avatar.properties';

const Avatar = (properties: Properties) => {
  const { alt, src } = properties;

  return (
    <CardWrapper className={style.wrapper}>
      <Title className={style.title} direction='vertical' level='h1' text={author} />
      <Image
        alt={alt}
        blurDataURL={`data:image/webp;base64,${blur}`}
        fetchPriority='high'
        fill
        placeholder='blur'
        priority
        src={src}
      />
    </CardWrapper>
  );
};

export { Avatar };
