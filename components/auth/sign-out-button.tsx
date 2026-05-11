'use client';

import { Loader2, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { signOut } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { Button } from '../ui/button';

interface SignOutButtonProps {
  className?: string;
  redirectTo?: string;
}

export function SignOutButton({
  className,
  redirectTo = '/sign-in',
}: SignOutButtonProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push(redirectTo);
            router.refresh();
          },
          onError: (error) => {
            toast.error(`Sign out failed: ${error}`);
          },
        },
      });
    } catch (error) {
      toast.error(`Sign out failed: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type='button'
      onClick={handleSignOut}
      disabled={loading}
      variant={'destructive'}
      className={className}
    >
      {loading ? (
        <Loader2 className='h-4 w-4 animate-spin' />
      ) : (
        <LogOut className='h-4 w-4 transition-transform group-hover:-translate-x-0.5' />
      )}

      <span>{loading ? 'Signing out...' : 'Sign Out'}</span>
    </Button>
  );
}
