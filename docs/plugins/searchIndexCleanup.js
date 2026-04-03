// Rspress plugin that cleans raw MDX/markdown artifacts from search index content.
//
// The built-in search indexer uses remark (not MDX) to parse content, so JSX
// tags like <Callout>, <BlogHeader />, <Cards.Card ... /> survive in the index.
// Link URLs are stripped but [text]() markdown syntax remains.
//
// This plugin hooks into modifySearchIndexData to strip those artifacts so
// search results show clean plain text.

function cleanContent(text) {
  if (!text) return text;

  return text
    // Remove self-closing JSX/HTML tags spanning multiple lines: <Component ... />
    .replace(/<[A-Za-z][A-Za-z0-9.]*\b[\s\S]*?\/>/g, '')
    // Remove opening JSX/HTML tags spanning multiple lines: <Callout type="info">
    .replace(/<[A-Za-z][A-Za-z0-9.]*\b[\s\S]*?>/g, '')
    // Remove closing JSX/HTML tags: </Callout>, </div>, etc.
    .replace(/<\/[A-Za-z][A-Za-z0-9.]*>/g, '')
    // Remove JSX curly-brace expressions: { ... }
    .replace(/\{[^{}]*\}/g, '')
    // Convert markdown images ![alt](url) → alt (before links, since ![]() contains [])
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Convert markdown links [text](url) → text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Strip markdown heading markers: ### Heading → Heading
    .replace(/^#{1,6}\s+/gm, '')
    // Remove leftover JSX-like attribute lines (e.g. title="..." href="..." on their own line)
    .replace(/^\s*\w+="[^"]*"\s*$/gm, '')
    // Collapse multiple blank lines into one
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export default function pluginSearchIndexCleanup() {
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
