import { getTranslations } from 'next-intl/server';

import { experience } from '@/mocks/experience';
import { socials } from '@/mocks/socials';
import { ImageWrapper } from '@/ui/image-wrapper/image-wrapper';
import { Social } from '@/ui/social/social';
import { Text } from '@/ui/text/text';
import { Title } from '@/ui/title/title';

import { ExperienceLabel } from '../experience-label/experience-label';
import styles from './sidebar.module.scss';

const Sidebar = async () => {
  const translations = await getTranslations('about');

  return (
    <aside className={styles.wrapper}>
      <ImageWrapper
        alt='nikkeyl'
        className={styles.avatar}
        src='/images/about-me/nikkeyl.svg'
      />
      <div className={styles.info}>
        <Title title='nikkeyl' />
        <ul className={styles.socials}>
          {socials.map(({ href, icon, key }) => (
            <li key={key}>
              <Social href={href} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles.labels}>
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
