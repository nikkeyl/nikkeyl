import { author } from '@/config/constants';
import { GitHubIcon } from '@/icons/github';
import { TelegramIcon } from '@/icons/telegram';

const socials = [
  {
    href: `//github.com/${author}`,
    key: 0,
    icon: GitHubIcon,
  },
  {
    href: `//t.me/${author}`,
    key: 1,
    icon: TelegramIcon,
  },
];

export { socials };
