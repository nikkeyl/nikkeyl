'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Title } from '@/ui/title/title';
import { ToolCard } from '@/widgets/tool-card/tool-card';
import { extractFileName } from '@/helpers/extract-file-name';

// import style from './tools.module.scss';

const Tools = () => {
  const [tools, setTools] = useState<string[]>([]);

  const translations = useTranslations('titles');

  useEffect(() => {
    const fetchTools = async () => {
      const response = await fetch('/api/get-tools-images');
      const tool = await response.json();

      const toolsList = tool.map((src: string, key: number) => ({
        src,
        key,
      }));

      setTools(toolsList);
    };

    setTimeout(() => {
      fetchTools();
    }, 1000);
  }, []);

  return (
    <section>
      <Title title={translations('tools')} />
      <ul>
        {tools.map(({ key, src }) => (
          <li key={key}>
            <ToolCard src={src} title={extractFileName(src)} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Tools };
