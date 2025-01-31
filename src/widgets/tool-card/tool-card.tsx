import Image from 'next/image';

import { Title } from '@/ui/title/title';

import style from './tool-card.module.scss';
import type { Properties } from './tool-card.properties';

const ToolCard = (properties: Properties) => {
  const { src, title } = properties;

  return (
    <div className={style.wrapper} title={title}>
      <Title className={style.title} color='dark' level='h3' title={title} />
      <div className={style.image}>
        <Image alt={title || ''} height={100} src={src || ''} width={100} />
      </div>
    </div>
  );
};

export { ToolCard };
