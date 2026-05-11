'use client'
import { GithubIcon, GoogleIcon } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function SocialButtons({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('grid grid-cols-2 gap-4', className)} {...props}>
      <Button variant='outline' type='button'>
        <GoogleIcon />
        <span className='sr-only'> Google</span>
      </Button>
      <Button variant='outline' type='button'>
        <GithubIcon />
        <span className='sr-only'> Github</span>
      </Button>
    </div>
  ); 
}
