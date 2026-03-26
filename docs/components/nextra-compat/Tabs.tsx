import type { ReactNode } from 'react';

import { Tabs as RspressTabs, Tab } from '@rspress/core/theme';

interface TabsProps {
  items: string[];
  children: ReactNode;
}

function Tabs({ items, children }: TabsProps) {
  return <RspressTabs values={items}>{children}</RspressTabs>;
}

Tabs.Tab = Tab;

export { Tabs };
