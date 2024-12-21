import { getTranslations } from 'next-intl/server';

import { experience, socials } from '@/data';
import { ImageWrapper, Social, Text, Title } from '@/ui';

import { ExperienceLabel } from '../experience-label/experience-label';
import styles from './sidebar.module.scss';

const Sidebar = async () => {
  const translations = await getTranslations('about');

  return (
    <aside className={styles.wrapper}>
      <div className={styles.me}>
        <ImageWrapper alt='nikkeyl' src='/images/about-me/nikkeyl.jpg' />
        <ul className={styles.socials}>
          {socials.map(({ icon, href, key }) => (
            <li key={key}>
              <Social href={href} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
      <Title className={styles.title} title={`${translations('name')} (nikkeyl)`} />
      <ul className={styles.labels}>
        {experience.map(({ icon, startDate, text, key }) => (
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
