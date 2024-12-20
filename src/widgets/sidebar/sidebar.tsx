import { CoinIcon, GitHubIcon, TelegramIcon, TerminalIcon } from '@/icons';
import { ImageWrapper, Social, Text, Title } from '@/ui';

import { ExperienceLabel } from '../experience-label/experience-label';
import styles from './sidebar.module.scss';

const experiences = [
  {
    icon: <TerminalIcon />,
    startDate: '2021-04-21',
    text: 'в разработке',
    key: 0,
  },
  {
    icon: <CoinIcon />,
    startDate: '2024-08-23',
    text: 'коммерческого опыта',
    key: 1,
  },
];

const socials = [
  {
    href: '//github.com/nikkeyl',
    key: 0,
    icon: <GitHubIcon />,
  },
  {
    href: '//t.me/nikkeyl',
    key: 1,
    icon: <TelegramIcon />,
  },
];

const Sidebar = () => (
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
    <Title className={styles.title} title='Никита Алманов (nikkeyl)' />
    <ul className={styles.labels}>
      {experiences.map(({ icon, startDate, text, key }) => (
        <li key={key}>
          <ExperienceLabel icon={icon} startDate={startDate} text={text} />
        </li>
      ))}
    </ul>
    <Text>
      На кой чёрт здесь что-то писать о себе, если <a href='#projects'>проекты</a>{' '}
      всё расскажут и даже покажут куда лучше?
    </Text>
  </aside>
);

export { Sidebar };
