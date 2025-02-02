import { author } from '@/config/constants';
import { GitHubIcon } from '@/icons/github';
import { TelegramIcon } from '@/icons/telegram';

const socials = [
  {
    ariaLabel: 'GitHub',
    href: `//github.com/${author}`,
    icon: GitHubIcon,
    key: 0,
  },
  {
    ariaLabel: 'Telegram',
    href: `//t.me/${author}`,
    icon: TelegramIcon,
    key: 1,
  },
];

export { socials };
