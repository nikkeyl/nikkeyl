import { useTranslations } from 'next-intl';

import { author } from '@/config/constants';
import { experience } from '@/mocks/experience';
import { socials } from '@/mocks/socials';
import { Social } from '@/ui/social/social';
import { Text } from '@/ui/text/text';

import { Avatar } from '../avatar/avatar';
import { ExperienceLabel } from '../experience-label/experience-label';
import style from './sidebar.module.scss';

const Sidebar = () => {
  const translationsAbout = useTranslations('about');
  const translationsLabel = useTranslations('labels');

  return (
    <aside className={style.wrapper}>
      <div className={style.avatar}>
        <Avatar alt={author} src={`/images/about-me/${author}.svg`} />
        <ul className={style.socials}>
          {socials.map(({ ariaLabel, href, icon, key }) => (
            <li key={key}>
              <Social ariaLabel={ariaLabel} href={href} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
      <ul className={style.labels}>
        {experience.map(({ icon, jobLink, key, startDate, text }) => (
          <li key={key}>
            <ExperienceLabel
              icon={icon}
              jobLink={jobLink || ''}
              startDate={startDate}
              text={translationsLabel(text)}
            />
          </li>
        ))}
      </ul>
      <Text>{translationsAbout('info')}</Text>
    </aside>
  );
};

export { Sidebar };
