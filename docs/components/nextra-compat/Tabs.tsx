import { Tabs as RspressTabs, Tab } from '@rspress/core/theme';
import type { ReactNode } from 'react';

interface TabsProps {
  items: string[];
  children: ReactNode;
}

function Tabs({ items, children }: TabsProps) {
  return <RspressTabs values={items}>{children}</RspressTabs>;
}

Tabs.Tab = Tab;

export { Tabs };
