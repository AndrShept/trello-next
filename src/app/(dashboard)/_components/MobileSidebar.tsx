'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar';
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { Sidebar } from './Sidebar';

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    onClose();
    if (isMobile) {
      onClose();
    }
  }, [onClose, pathname, isMobile]);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return;
  }
  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant={'ghost'}
        size={'sm'}
      >
        <MenuIcon className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-64 p-2  pt-10" side={'left'}>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};
