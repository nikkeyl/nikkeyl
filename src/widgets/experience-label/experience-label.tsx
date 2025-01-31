import { calculateExperience } from '@/helpers/calculate-experience';
import { getMonthsDeclension } from '@/helpers/get-months-declension';
import { getYearsDeclension } from '@/helpers/get-years-declension';
import { Text } from '@/ui/text/text';

import style from './experience-label.module.scss';
import type { Properties } from './experience-label.properties';

const ExperienceLabel = async (properties: Properties) => {
  const { icon, startDate, text } = properties;

  const { months, years } = calculateExperience(new Date(startDate));

  const yearsText = `${years} ${getYearsDeclension(years)}`;
  const monthsText = `${months} ${getMonthsDeclension(months)}`;
  const experienceText = `${yearsText} ${monthsText}`;

  const Icon = icon;

  return (
    <div className={style.wrapper}>
      <Icon />
      <Text color='blue'>
        <span>{experienceText}</span> {text}
      </Text>
    </div>
  );
};

export { ExperienceLabel };
