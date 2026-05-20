'use client';

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavMain } from '@/components/web/main-nav';
import { NavUser } from '@/components/web/nav-user';
import { useSession } from '@/lib/auth-client';
import { mainSideBarMenu } from '@/lib/constants';
import { LogoIcon } from '../shared/icons';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();
  const user = session?.user;
  if (!user) {
    return null;
  }
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <div className='flex items-center gap-2'>
          <SidebarMenuButton tooltip='Smart researcher'>
            <LogoIcon className='size-8' />
            <span className='h-4 w-24 '>Researcher</span>
          </SidebarMenuButton>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainSideBarMenu} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
