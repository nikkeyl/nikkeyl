import Image from 'next/image';

import { CardWrapper } from '@/ui/card-wrapper/card-wrapper';
import { Title } from '@/ui/title/title';

import style from './tool-card.module.scss';
import type { Properties } from './tool-card.properties';

const ToolCard = (properties: Properties) => {
  const { src, title } = properties;

  return (
    <CardWrapper ariaLabel={title} className={style.wrapper} title={title}>
      <Title className={style.title} direction='vertical' level='h3' text={title} />
      <div className={style.image}>
        <Image
          alt={title || ''}
          fetchPriority='low'
          height={60}
          priority
          src={src || ''}
          width={60}
        />
      </div>
    </CardWrapper>
  );
};

export { ToolCard };
