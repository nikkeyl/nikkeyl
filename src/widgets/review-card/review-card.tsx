import Image from 'next/image';

import { blur } from '@/config/constants';
import { extractFileName } from '@/helpers/extract-file-name';
import { LinkIcon } from '@/icons/link';
import { Text } from '@/ui/text/text';
import { Title } from '@/ui/title/title';

import style from './review-card.module.scss';
import type { Properties } from './review-card.properties';

const ReviewCard = (properties: Properties) => {
  const { avatar, siteLink, text } = properties;

  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.head}>
          <div className={style.image}>
            <Image
              alt={avatar}
              blurDataURL={`data:image/webp;base64,${blur}`}
              fetchPriority='high'
              height={60}
              placeholder='blur'
              priority
              src={avatar}
              width={60}
            />
          </div>
          <div className={style.info}>
            <Title
              className={style.name}
              level='h3'
              title={extractFileName(avatar)}
            />
            <a
              className={style.link}
              href={siteLink}
              rel='nofollow noreferrer'
              target='_blank'
            >
              <LinkIcon />
              https:{siteLink}
            </a>
          </div>
        </div>
        <Text>{text}</Text>
      </div>
    </div>
  );
};

export { ReviewCard };
