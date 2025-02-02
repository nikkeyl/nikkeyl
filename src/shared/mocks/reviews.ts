import { getTranslations } from 'next-intl/server';

const translations = await getTranslations('reviews');
const reviews = [
  {
    avatar: '/images/reviews/alexey-mozgunov.jpg',
    siteLink: '//brainarti.ru',
    text: translations('alexey-mozgunov'),
    key: 0,
  },
];

export { reviews };
