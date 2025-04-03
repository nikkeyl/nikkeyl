import { getLocale, getTranslations } from 'next-intl/server';

const getYearsDeclension = async (years: number) => {
  const translations = await getTranslations('dates');
  const locale = await getLocale();

  if (years % 100 >= 11 && years % 100 <= 14) {
    return translations('years');
  }

  if (years % 10 === 1) {
    return translations('year');
  }

  if (locale === 'ru' && years % 10 >= 2 && years % 10 <= 4) {
    return translations('years2');
  }

  if (years % 10 >= 2 && years % 10 <= 4) {
    return translations('years');
  }

  return translations('years');
};

export { getYearsDeclension };
