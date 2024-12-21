import '@/styles/app.scss';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import { Content, Wrapper } from '@/ui';
import { Sidebar } from '@/widgets';

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
      </body>
    </html>
  );
};

export { metadata, viewport } from '@/config';
export default RootLayout;
