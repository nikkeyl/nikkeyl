'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import { extractFileName } from '@/helpers/extract-file-name';
import type { ToolsTypes } from '@/types/tools';
import { Text } from '@/ui/text/text';
import { Title } from '@/ui/title/title';
import { ToolCard } from '@/widgets/tool-card/tool-card';

import style from './tools.module.scss';

const Tools = () => {
  const [tools, setTools] = useState<ToolsTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const translationsTitle = useTranslations('titles');
  const translationsText = useTranslations('text');

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
    <section>
      <Title className={style.title} title={translationsTitle('tools')} />
      {isLoading ? (
        <div className={style.loader}>
          <Text>{translationsText('loading')}</Text>
        </div>
      ) : (
        <Marquee className={style.list || ''} speed={80}>
          {tools.map(({ key, src }) => (
            <ToolCard key={key} src={src} title={extractFileName(src, true)} />
          ))}
        </Marquee>
      )}
    </section>
  );
};

export { Tools };
