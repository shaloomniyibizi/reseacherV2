'use client';
import { CustomInput } from '@/components/shared/custom-input';
import { AppleIcon, GoogleIcon } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSeparator,
} from '@/components/ui/field';
import { signIn } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, LogIn } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import z from 'zod';

const SignInSchema = z.object({
  email: z.email('Please enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
  rememberMe: z.boolean(),
});

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  async function onSubmit(data: z.infer<typeof SignInSchema>) {
    setLoading(true);
    await signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: '/dashboard',
        rememberMe: data.rememberMe,
      },
      {
        onSuccess: () => {
          setLoading(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          setLoading(false);
        },
      },
    );
  }

  return (
    <form
      className={cn('p-6 md:p-8', className)}
      {...props}
      id='sign-in-form'
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='text-2xl font-bold'>Good to See You Again</h1>
          <p className='text-balance text-muted-foreground'>
            Enter your credentials to securely access your account.
          </p>
        </div>
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <CustomInput
                {...field}
                type='email'
                placeholder='Email'
                error={fieldState.error?.message}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <CustomInput
                {...field}
                type='password'
                placeholder='Password'
                error={fieldState.error?.message}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='rememberMe'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <CustomInput
                {...field}
                type='checkbox'
                label='Remember me'
                error={fieldState.error?.message}
                onChange={field.onChange}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field>
          <Button type='submit'>
            {loading ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <LogIn className='h-4 w-4 transition-transform group-hover:-translate-x-0.5' />
            )}

            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
          </Button>
        </Field>
        <FieldSeparator className='*:data-[slot=field-separator-content]:bg-card'>
          Or continue with
        </FieldSeparator>
        <Field className='grid grid-cols-2 gap-4'>
          <Button variant='outline' type='button'>
            <AppleIcon />
            <span className='sr-only'>Login with Apple</span>
          </Button>
          <Button variant='outline' type='button'>
            <GoogleIcon />
            <span className='sr-only'>Login with Google</span>
          </Button>
        </Field>
        <FieldDescription className='text-center'>
          Don&apos;t have an account? <a href='#'>Sign up</a>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
