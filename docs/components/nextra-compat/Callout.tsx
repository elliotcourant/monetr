import type { ReactNode } from 'react';

import { Callout as RspressCallout } from '@rspress/core/theme';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'default';
  emoji?: string;
  children: ReactNode;
}

const typeMap: Record<string, 'tip' | 'note' | 'warning' | 'caution' | 'danger' | 'info'> = {
  info: 'info',
  warning: 'warning',
  error: 'danger',
  default: 'info',
};

export function Callout({ type, children }: CalloutProps) {
  const rspressType = typeMap[type ?? 'default'] ?? 'info';
  return <RspressCallout type={rspressType}>{children}</RspressCallout>;
}
