'use client';

import dynamic from 'next/dynamic';

const NavigationGuard = dynamic(() => import('./NavigationGuard'), {
  ssr: false,
  loading: () => null,
});

export default function ClientNavigationWrapper() {
  return <NavigationGuard />;
}