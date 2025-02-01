import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { blur } from '@/config/constants';
import { CoinIcon } from '@/icons/coin';
import { Button } from '@/ui/button/button';
import { Title } from '@/ui/title/title';

import style from './project-card.module.scss';
import type { Properties } from './project-card.properties';

const ProjectCard = (properties: Properties) => {
  const { alt, hosting, href, isCommerce = false, src, title } = properties;

  const translations = useTranslations('buttons');

  return (
    <a
      className={style.wrapper}
      href={href}
      rel='nofollow noreferrer'
      target='_blank'
    >
      <div className={style.info}>
        <Title className={style.title} level='h3' title={title} />
        {hosting !== 'other' &&
          (hosting === 'github' ? (
            <Image
              alt='GitHub'
              height={10}
              src='/images/tools/github.svg'
              width={10}
            />
          ) : (
            <Image
              alt='GitHub'
              height={10}
              src='/images/tools/vercel.svg'
              width={10}
            />
          ))}
        {isCommerce && <CoinIcon />}
      </div>
      <div className={style.image}>
        <Image
          alt={alt || ''}
          blurDataURL={`data:image/webp;base64,${blur}`}
          fetchPriority='high'
          fill
          placeholder='blur'
          priority
          src={src || ''}
        />
        <div className={style.view}>
          <Button text={translations('view')} />
        </div>
      </div>
    </a>
  );
};

export { ProjectCard };
