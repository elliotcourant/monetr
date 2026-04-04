// Strips MDX/markdown artifacts from search index content. The built-in
// indexer uses remark (not MDX), so JSX tags and markdown syntax leak through.

import type { RspressPlugin } from '@rspress/shared';

function cleanContent(text: string): string {
  return text
    .replace(/<[A-Za-z][A-Za-z0-9.]*\b[\s\S]*?\/>/g, '') // self-closing tags
    .replace(/<[A-Za-z][A-Za-z0-9.]*\b[\s\S]*?>/g, '') // opening tags
    .replace(/<\/[A-Za-z][A-Za-z0-9.]*>/g, '') // closing tags
    .replace(/\{[^{}]*\}/g, '') // JSX expressions
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // images → alt text (before links)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links → text
    .replace(/^#{1,6}\s+/gm, '') // heading markers
    .replace(/^\s*\w+="[^"]*"\s*$/gm, '') // stray JSX attributes
    .replace(/\n{3,}/g, '\n\n') // collapse blank lines
    .trim();
}

export default function pluginSearchIndexCleanup(): RspressPlugin {
  return {
    name: 'plugin-search-index-cleanup',
    modifySearchIndexData(pages) {
      for (const page of pages) {
        if (page.content) {
          page.content = cleanContent(page.content);
        }
      }
    },
  };
}
