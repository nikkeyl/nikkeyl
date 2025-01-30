import { getTranslations } from 'next-intl/server';

const translations = await getTranslations('dates');

const getYearsDeclension = (years: number) => {
  if (years % 100 >= 11 && years % 100 <= 14) {
    return translations('years');
  }

  if (years % 10 === 1) {
    return translations('year');
  }

  if (years % 10 >= 2 && years % 10 <= 4) {
    return translations('years');
  }

  return 'лет';
};

export { getYearsDeclension };
