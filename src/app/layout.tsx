import '@/styles/app.scss';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import { Content } from '@/ui/content/content';
import { Wrapper } from '@/ui/wrapper/wrapper';
import { Sidebar } from '@/widgets/sidebar/sidebar';

const RootLayout = async (properties: PropsWithChildren) => {
  const { children } = properties;

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Wrapper>
            <Sidebar />
            <Content>{children}</Content>
          </Wrapper>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { metadata, viewport } from '@/config/metadata';
export default RootLayout;
