import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('src/app/i18n/get-request-config.ts');

export default withNextIntl({
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: 'nikkeyl.vercel.app',
        pathname: '/images/**',
        protocol: 'https',
      },
    ],
  },
});
