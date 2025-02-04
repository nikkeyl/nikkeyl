import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { blur } from '@/config/constants';
import { CoinIcon } from '@/icons/coin';
import { Button } from '@/ui/button/button';
import { CardWrapper } from '@/ui/card-wrapper/card-wrapper';
import { Title } from '@/ui/title/title';

import style from './project-card.module.scss';
import type { Properties } from './project-card.properties';

const ProjectCard = (properties: Properties) => {
  const {
    alt,
    href,
    index,
    isCommerce = false,
    isGitHub,
    isVercel,
    src,
    title,
  } = properties;

  const translations = useTranslations('buttons');

  return (
    <CardWrapper ariaLabel={title} className={style.wrapper} href={href} type='a'>
      <div className={style.info}>
        <Title direction='vertical' level='h3' text={title} />
        {isGitHub && (
          <Image
            alt='GitHub'
            height={20}
            src='/images/tools/github.svg'
            width={20}
          />
        )}
        {isVercel && (
          <Image
            alt='Vercel'
            height={20}
            src='/images/tools/vercel.svg'
            width={20}
          />
        )}
        {isCommerce && <CoinIcon />}
      </div>
      <div className={style.image}>
        <Image
          alt={alt || ''}
          blurDataURL={`data:image/webp;base64,${blur}`}
          fetchPriority={index >= 2 ? 'low' : 'high'}
          fill
          placeholder='blur'
          priority
          src={src || ''}
        />
        <div className={style.view}>
          <Button text={translations('view')} />
        </div>
      </div>
    </CardWrapper>
  );
};

export { ProjectCard };
