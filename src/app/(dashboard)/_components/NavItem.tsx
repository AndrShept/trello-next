import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CreditCardIcon, LayoutIcon, SettingsIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export type Organization = {
  id: string;
  slug: string | null;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  key: string;
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isActive,
  isExpanded,
  key,
  onExpand,
  organization,
}: NavItemProps) => {
  const pathname = usePathname();
  const routers = [
    {
      label: 'Boards',
      icon: <LayoutIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <LayoutIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <SettingsIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Settings',
      icon: <CreditCardIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  return (
    <AccordionItem className="border-none" value={organization.id}>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start hover:no-underline ',
          { 'bg-sky-500/10 text-sky-700': isActive && !isExpanded },
        )}
      >
        <div className="flex items-center gap-x-2 ">
          <div className="w-7 h-7 relative">
            <Image
              className="rounded-sm object-cover"
              fill
              alt="Organization"
              src={organization.imageUrl}
            />
          </div>
          <span className="font-medium text-sm ">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="mt-2 space-y-1">
        {routers.map((router) => (
          <ul key={router.label}>
            <Button
              className={cn('w-full justify-start  ', {
                'bg-sky-500/10 text-sky-700 hover:bg-sky-500/10 hover:text-sky-700 ':
                  pathname === router.href,
              })}
              asChild
              variant={'ghost'}
            >
              <Link href={router.href}>
                <div className="flex ml-6 items-center">
                  {router.icon}
                  <p>{router.label}</p>
                </div>
              </Link>
            </Button>
          </ul>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
