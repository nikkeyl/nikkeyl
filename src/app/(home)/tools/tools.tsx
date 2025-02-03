'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import { extractFileName } from '@/helpers/extract-file-name';
import type { ToolsTypes } from '@/types/tools';
import { Loader } from '@/ui/loader/loader';
import { Title } from '@/ui/title/title';
import { ToolCard } from '@/widgets/tool-card/tool-card';

import style from './tools.module.scss';

const Tools = () => {
  const [tools, setTools] = useState<ToolsTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const translations = useTranslations('titles');

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('/api/get-tools-images');
        const tool = await response.json();

        const toolsList = tool.map((src: string, key: number) => ({
          src,
          key,
        }));

        setTools(toolsList);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTools();
  }, []);

  return (
    <section className={style.wrapper}>
      <Title className={style.title} title={translations('tools')} />
      {isLoading ? (
        <Loader text='loading' />
      ) : (
        <Marquee className={style.list || ''} pauseOnHover speed={80}>
          {tools.map(({ key, src }) => (
            <ToolCard key={key} src={src} title={extractFileName(src, true)} />
          ))}
        </Marquee>
      )}
    </section>
  );
};

export { Tools };
