'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Breadcrumbs from '@/components/web/breadcrumb';
import { useSession } from '@/lib/auth-client';
import { mainSideBarMenu } from '@/lib/constants';
import { generateBreadcrumbItems } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ToggleIcon } from '../shared/icons';
import ThemeToggle from '../shared/theme-toggle';
import { SidebarTrigger } from '../ui/sidebar';

const DashboardHeader = () => {
  const pathname = usePathname();
  const breadcrumbItems = generateBreadcrumbItems(pathname);
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <header className='sticky top-0 z-50 flex w-full items-center gap-4 bg-background/95 px-4 py-2 backdrop-blur supports-backdrop-filter:bg-background/60 sm:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden'
          >
            <ToggleIcon />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='sm:max-w-xs'>
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>
          <nav className='mt-6 grid gap-6 text-lg font-medium'>
            {mainSideBarMenu.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
              >
                {item.icon && (
                  <item.icon className='transition-all group-hover:scale-110' />
                )}
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <SidebarTrigger className='-ml-4' />
      <Breadcrumbs items={breadcrumbItems} />
      <div className='ml-auto w-64'></div>
      {/* <NavUser user={user} /> */}
      <ThemeToggle />
    </header>
  );
};

export default DashboardHeader;
