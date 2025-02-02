import { headers } from 'next/headers';

const getLocale = async () => {
  const browserLocale = await headers();
  const currentLocale = browserLocale.get('accept-language') ?? 'en';
  const supportedLocales = ['de', 'en', 'ja', 'ru'];
  const defineLocale =
    currentLocale
      .split(',')
      .map((locale: string) => locale.trim())[0]
      ?.split('-')[0] ?? 'en';

  return supportedLocales.includes(defineLocale) ? defineLocale : 'en';
};

export { getLocale };
