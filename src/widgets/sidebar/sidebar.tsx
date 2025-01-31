import { useTranslations } from 'next-intl';

import { experience } from '@/mocks/experience';
import { socials } from '@/mocks/socials';
import { ImageWrapper } from '@/ui/image-wrapper/image-wrapper';
import { Social } from '@/ui/social/social';
import { Text } from '@/ui/text/text';
import { Title } from '@/ui/title/title';

import { ExperienceLabel } from '../experience-label/experience-label';
import style from './sidebar.module.scss';

const Sidebar = () => {
  const translations = useTranslations('about');

  return (
    <aside className={style.wrapper}>
      <ImageWrapper
        alt='nikkeyl'
        className={style.avatar}
        src='/images/about-me/nikkeyl.svg'
      />
      <div className={style.info}>
        <Title level='h1' title='nikkeyl' />
        <ul className={style.socials}>
          {socials.map(({ href, icon, key }) => (
            <li key={key}>
              <Social href={href} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
      <ul className={style.labels}>
        {experience.map(({ icon, key, startDate, text }) => (
          <li key={key}>
            <ExperienceLabel icon={icon} startDate={startDate} text={text} />
          </li>
        ))}
      </ul>
      <Text>{translations('info')}</Text>
    </aside>
  );
};

export { Sidebar };
