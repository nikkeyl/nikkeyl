import { useTranslations } from 'next-intl';

import { author } from '@/config/constants';
import { experience } from '@/mocks/experience';
import { socials } from '@/mocks/socials';
import { Avatar } from '@/ui/avatar/avatar';
import { Social } from '@/ui/social/social';
import { Text } from '@/ui/text/text';

import { ExperienceLabel } from '../experience-label/experience-label';
import style from './sidebar.module.scss';

const Sidebar = () => {
  const translations = useTranslations('about');

  return (
    <aside className={style.wrapper}>
      <div className={style.avatar}>
        <Avatar alt={author} src={`/images/about-me/${author}.svg`} />
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
