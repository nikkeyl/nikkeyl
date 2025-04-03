import { getTranslations } from 'next-intl/server';

import { calculateExperience } from '@/helpers/calculate-experience';
import { getMonthsDeclension } from '@/helpers/get-months-declension';
import { getYearsDeclension } from '@/helpers/get-years-declension';
import { Text } from '@/ui/text/text';

import style from './experience-label.module.scss';
import type { Properties } from './experience-label.properties';

const ExperienceLabel = async (properties: Properties) => {
  const { icon, jobLink, now = false, startDate, text } = properties;

  const { months, years } = calculateExperience(new Date(startDate ?? ''));

  const yearsText = years > 0 ? `${years} ${await getYearsDeclension(years)}` : '';
  const monthsText =
    months > 0 ? `${months} ${await getMonthsDeclension(months)}` : '';
  const experienceText = [yearsText, monthsText].join(' ');

  const Icon = icon;

  const translations = await getTranslations('dates');

  return (
    <div className={style.wrapper}>
      <Icon />
      <Text color='yellow'>
        {jobLink && (
          <a href={jobLink} rel='nofollow noreferrer' target='_blank'>
            https:{jobLink}
          </a>
        )}
        {now === true ? (
          <span>
            {startDate} {translations('now')}
          </span>
        ) : (
          <>
            {text}: <span>{experienceText}</span>
          </>
        )}
      </Text>
    </div>
  );
};

export { ExperienceLabel };
