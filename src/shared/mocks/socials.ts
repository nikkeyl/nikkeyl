import { author } from '@/config/constants';
import { ArcholeatIcon } from '@/icons/archoleat';
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
  {
    ariaLabel: 'Archoleat',
    href: `//github.com/archoleat`,
    icon: ArcholeatIcon,
    key: 2,
  },
];

export { socials };
