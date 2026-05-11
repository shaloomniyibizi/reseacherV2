'use client';
import { SocialButtons } from '@/components/auth/social-buttons';
import { CustomInput } from '@/components/shared/custom-input';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldSeparator,
} from '@/components/ui/field';
import { signUp } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import z from 'zod';

const signupSchema = z
  .object({
    name: z.string().min(1, 'Name is required.'),
    email: z.email('Please enter a valid email address.'),
    phoneNumber: z.string().min(10, 'Phone number must be 10 number'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // Sets the error path
  });

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });
  async function onSubmit(data: z.infer<typeof signupSchema>) {
    setLoading(true);
    await signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        callbackURL: '/dashboard',
      },
      {
        onSuccess: () => {
          toast.success('Sign up successful!');
        },
        onError: (error) => {
          toast.error(error.error.message || 'Something went wrong.');
        },
      },
    );
    setLoading(false);
  }

  return (
    <form
      className={cn('p-6 md:p-8', className)}
      {...props}
      id='sign-up-form'
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='text-2xl font-bold'>Get Started Today</h1>
          <p className='text-balance text-muted-foreground'>
            Create an account in just a few steps and begin your journey with
            us.
          </p>
        </div>
        <Controller
          name='name'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <CustomInput
                {...field}
                type='text'
                placeholder='Enter your full name'
                error={fieldState.error?.message}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <CustomInput
                {...field}
                type='email'
                placeholder='Enter your email'
                error={fieldState.error?.message}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='phoneNumber'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <CustomInput
                {...field}
                type='phone'
                placeholder='Enter your phone number'
                error={fieldState.error?.message}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <FieldGroup className='grid gap-2 grid-cols-2'>
          <Controller
            name='password'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <CustomInput
                  {...field}
                  type='password'
                  placeholder='Enter your password'
                  error={fieldState.error?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name='confirmPassword'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <CustomInput
                  {...field}
                  type='password'
                  placeholder='Confirm your password'
                  error={fieldState.error?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Field>
          <Button type='submit'>
            {loading ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <UserPlus className='h-4 w-4 transition-transform group-hover:-translate-x-0.5' />
            )}

            <span>{loading ? 'Signing up...' : 'Sign Up'}</span>
          </Button>
        </Field>
        <FieldSeparator className='*:data-[slot=field-separator-content]:bg-card'>
          Or continue with
        </FieldSeparator>
        <SocialButtons />
      </FieldGroup>
    </form>
  );
}
