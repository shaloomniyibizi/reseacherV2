'use client';

import { SignOutButton } from '@/components/auth/sign-out-button';

export default function DashboardPage() {
  return (
    <div>
      Dashboard page
      <div className='flex items-center justify-end p-6'>
        <SignOutButton />
      </div>
    </div>
  );
}
