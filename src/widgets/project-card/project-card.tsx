import Image from 'next/image';

import { extractFileName } from '@/helpers/extract-file-name';
import { Button } from '@/ui/button/button';
import { Title } from '@/ui/title/title';

import style from './project-card.module.scss';
import type { Properties } from './project-card.properties';

const ProjectCard = (properties: Properties) => {
  const { alt, href, src } = properties;

  return (
    <a className={style.wrapper} href={href}>
      <Title className={style.title} level='h3' title={extractFileName(src || '')} />
      <div className={style.image}>
        <Image alt={alt || ''} fill src={src || ''} />
        <div className={style.view}>
          <Button text='View' />
        </div>
      </div>
    </a>
  );
};

export { ProjectCard };
