import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';
import { pluginSass } from '@rsbuild/plugin-sass';
import path from 'path';

const branch = process.env.GIT_BRANCH ?? 'main';

export default defineConfig({
  root: 'docs',
  title: 'monetr',
  description:
    'Take control of your finances, paycheck by paycheck, with monetr. Put aside what you need, spend what you want, and confidently manage your money with ease.',
  logo: '/logo.svg',
  icon: '/favicon.ico',
  lang: 'en',
  locales: [{ lang: 'en', label: 'English' }],
  multiVersion: {
    default: 'v1',
    versions: ['v1'],
  },
  globalStyles: path.join(__dirname, 'theme/index.css'),
  themeConfig: {
    darkMode: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/monetr/monetr',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/68wTCXrhuq',
      },
    ],
    footer: {
      message: '',
    },
    editLink: {
      docRepoBaseUrl: `https://github.com/monetr/monetr/blob/${branch}/docs/docs`,
    },
    lastUpdated: true,
  },
  head: [
    '<script>window.RSPRESS_THEME = "dark";</script>',
    ...(process.env.NODE_ENV !== 'development'
      ? [
          '<script defer src="https://a.monetr.app/script.js" data-website-id="ccbdfaf9-683f-4487-b97f-5516e1353715"></script>',
        ]
      : []),
  ],
  plugins: [pluginSitemap({ siteUrl: 'https://monetr.app' })],
  builderConfig: {
    plugins: [pluginSass()],
    source: {
      alias: {
        '@monetr/docs': path.resolve(__dirname, '.'),
      },
    },
  },
  route: {
    cleanUrls: true,
  },
});
