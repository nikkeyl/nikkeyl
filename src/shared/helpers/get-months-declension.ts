import { getLocale, getTranslations } from 'next-intl/server';

const translations = await getTranslations('dates');
const locale = await getLocale();

const getMonthsDeclension = (months: number) => {
  if (months % 10 === 1 && months !== 11) {
    return translations('month');
  }

  if (locale === 'ru' && months % 10 >= 2 && months % 10 <= 4) {
    return translations('months2');
  }

  if (months % 10 >= 2 && months % 10 <= 4 && (months < 10 || months > 20)) {
    return translations('months');
  }

  return translations('months');
};

export { getMonthsDeclension };
