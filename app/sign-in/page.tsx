import { SignInForm } from '@/components/auth/sign-in-form';
import { SignUpForm } from '@/components/auth/sign-up-form';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogInIcon, UserPlus } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className='flex flex-col gap-6'>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <div className='flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10'>
            <div className='w-full max-w-lg md:max-w-4xl bg-card'>
              <Tabs defaultValue='signin' className='w-full'>
                <TabsList className='w-full'>
                  <TabsTrigger value='signin'>
                    <LogInIcon /> Sign In
                  </TabsTrigger>
                  <TabsTrigger value='signup'>
                    <UserPlus /> Sign Up
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='signin'>
                  <SignInForm />
                </TabsContent>
                <TabsContent value='signup'>
                  <SignUpForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className='relative hidden bg-background md:block'>
            <Image
              src='/placeholder.svg'
              alt='Image'
              className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
              width={0}
              height={0}
              sizes='100vw'
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
