'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { extractFileName } from '@/helpers/extract-file-name';
import { Loader } from '@/ui/loader/loader';
import { Title } from '@/ui/title/title';
import { Marquee } from '@/widgets/marquee/marquee';
import { ToolCard } from '@/widgets/tool-card/tool-card';

import style from './tools.module.scss';

const Tools = () => {
  const [tools, setTools] = useState([]);
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
      <Title className={style.title} text={translations('tools')} />
      {isLoading ? (
        <Loader text='loading' />
      ) : (
        <Marquee>
          <ul>
            {tools.map(({ key, src }) => (
              <li key={key}>
                <ToolCard src={src} title={extractFileName(src, true)} />
              </li>
            ))}
          </ul>
        </Marquee>
      )}
    </section>
  );
};

export { Tools };
