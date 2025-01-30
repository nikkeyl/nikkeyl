import { getTranslations } from 'next-intl/server';

const translations = await getTranslations('dates');

const getMonthsDeclension = (months: number) => {
  if (months % 10 === 1 && months !== 11) {
    return translations('month');
  }

  if (months % 10 >= 2 && months % 10 <= 4 && (months < 10 || months > 20)) {
    return translations('months');
  }

  return translations('months');
};

export { getMonthsDeclension };
