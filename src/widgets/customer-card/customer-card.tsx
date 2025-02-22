import Image from 'next/image';

import { blur } from '@/config/constants';
import { extractFileName } from '@/helpers/extract-file-name';
import { CardWrapper } from '@/ui/card-wrapper/card-wrapper';
import { Text } from '@/ui/text/text';
import { Title } from '@/ui/title/title';

import style from './customer-card.module.scss';
import type { Properties } from './customer-card.properties';

const CustomerCard = (properties: Properties) => {
  const { avatar, name, siteLink, text } = properties;

  return (
    <CardWrapper ariaLabel={name} className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.head}>
          <div className={style.image}>
            <Image
              alt={extractFileName(avatar, true)}
              blurDataURL={`data:image/webp;base64,${blur}`}
              height={60}
              placeholder='blur'
              src={avatar}
              width={60}
            />
          </div>
          <div className={style.info}>
            <Title className={style.name} level='h3' text={name} />
            <a
              className={style.link}
              href={siteLink}
              rel='nofollow noreferrer'
              target='_blank'
            >
              https:{siteLink}
            </a>
          </div>
        </div>
        <div className={style.text}>
          <Text>{text}</Text>
        </div>
      </div>
    </CardWrapper>
  );
};

export { CustomerCard };
