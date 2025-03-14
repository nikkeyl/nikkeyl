import type { Metadata, Viewport } from 'next';

import socialCoverImage from '@/socials/cover.jpg';

import { author } from './constants';

const title = author;
const description = `${title} — Front-End Development`;
const images = [
  {
    url: socialCoverImage.src,
    height: socialCoverImage.height,
    width: socialCoverImage.width,
  },
];
const siteName = title;
const siteURL = `https://${title}.vercel.app`;

const metadata: Metadata = {
  alternates: { canonical: siteURL },
  applicationName: title,
  appleWebApp: {
    title,
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  authors: {
    name: title,
    url: `https://t.me/${title}`,
  },
  creator: title,
  description,
  keywords: [
    'about-me',
    'freelance',
    'front-end',
    'full-time',
    'herd-skills',
    'part-time',
    'portfolio',
    'soft-skills',
    title,
  ],
  metadataBase: new URL(siteURL),
  robots: {
    index: true,
    follow: true,
  },
  referrer: 'origin',
  title,
  manifest: 'manifest.webmanifest',
  openGraph: {
    description,
    url: siteURL,
    images,
    siteName,
    title,
    type: 'website',
  },
  twitter: {
    creator: title,
    description,
    images,
    site: siteURL,
    title,
  },
  icons: {
    apple: {
      fetchPriority: 'high',
      sizes: '180x180',
      type: 'image/png',
      url: 'favicons/apple-touch-icon.png',
    },
    icon: {
      fetchPriority: 'high',
      sizes: '48x48',
      type: 'image/x-icon',
      url: 'favicon.ico',
    },
    other: {
      fetchPriority: 'high',
      sizes: 'any',
      type: 'image/svg+xml',
      url: 'favicons/icon.svg',
    },
  },
};

const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: 'black',
};

export { metadata, viewport };
