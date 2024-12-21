import { getTranslations } from 'next-intl/server';

import { CoinIcon, TerminalIcon } from '@/icons';

const translations = await getTranslations('labels');

const experience = [
  {
    icon: TerminalIcon,
    startDate: '2021-04-21',
    text: translations('development'),
    key: 0,
  },
  {
    icon: CoinIcon,
    startDate: '2024-08-23',
    text: translations('commerce'),
    key: 1,
  },
];

export { experience };
