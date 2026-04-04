import rehypeMathPostProcess from './plugins/rehypeMathPostProcess';
import pluginSearchIndexCleanup from './plugins/searchIndexCleanup';

import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';
import path from 'path';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const branch = process.env.GIT_BRANCH ?? 'main';

export default defineConfig({
  outDir: process.env.OUTPUT_DIR ?? 'doc_build',
  root: 'src',
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
      docRepoBaseUrl: `https://github.com/monetr/monetr/blob/${branch}/docs/src`,
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
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeMathPostProcess],
    shiki: {
      langs: [
        {
          name: 'math',
          scopeName: 'source.math',
          patterns: [{ match: '.', name: 'text.math' }],
          // Required for some reason?
          repository: {},
        },
      ],
    },
    link: {
      checkDeadLinks: true,
    }
  },
  plugins: [
    pluginSitemap({ siteUrl: 'https://monetr.app' }),
    pluginSearchIndexCleanup(),
  ],
  builderConfig: {
    plugins: [pluginSass()],
    output: {
      cleanDistPath: true,
    },
    resolve: {
      alias: {
        '@monetr/docs': path.resolve(__dirname, '.'),
      },
    },
  },
  route: {
    cleanUrls: true,
  },
});
