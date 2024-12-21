import {
  calculateExperience,
  getMonthsDeclension,
  getYearsDeclension,
} from '@/helpers';
import { Text } from '@/ui';

import styles from './experience-label.module.scss';
import type { Properties } from './experience-label.properties';

const ExperienceLabel = async (properties: Properties) => {
  const { icon, startDate, text } = properties;

  const { years, months } = calculateExperience(new Date(startDate));

  const yearsText = years > 0 ? `${years} ${getYearsDeclension(years)}` : '';
  const monthsText = months > 0 ? `${months} ${getMonthsDeclension(months)}` : '';
  const experienceText = [yearsText, monthsText].filter(Boolean).join(' ');
  const Icon = icon;

  return (
    <div className={styles.wrapper}>
      <Icon />
      <Text color='blue'>
        <span>{experienceText}</span> {text}
      </Text>
    </div>
  );
};

export { ExperienceLabel };
