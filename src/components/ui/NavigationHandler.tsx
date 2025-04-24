'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function NavigationHandler() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/[object%20Object]' || pathname?.includes('[object%20Object]')) {
      console.log('Invalid navigation intercepted:', pathname);
      router.replace('/');
    }
  }, [pathname, router]);

  return null;
}