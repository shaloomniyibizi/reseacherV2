'use client';

import dynamic from 'next/dynamic';
import * as React from 'react';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';
import 'react-quill-new/dist/quill.snow.css';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
});

export type InputFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'textarea'
  | 'rich-text'
  | 'phone'
  | 'date'
  | 'checkbox'
  | 'select';

export interface Option {
  label: string;
  value: string;
}

interface CustomInputProps {
  type?: InputFieldType;

  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;

  value?: string | number | boolean;
  onChange?: (value: string | number | boolean) => void;
  onBlur?: () => void;

  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;

  options?: Option[];

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  className?: string;
  containerClassName?: string;

  autoComplete?: string;
}

export function CustomInput({
  type = 'text',
  label,
  description,
  error,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
  required,
  name,
  id,
  options,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  autoComplete,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const inputId = id || name;

  const baseInputStyles = cn(
    'flex h-9 w-full rounded  bg-accent/65 text-accent-foreground px-2 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 border-b-2  focus-visible:border-b-primary disabled:cursor-not-allowed disabled:opacity-50',
    error
      ? 'border-b-destructive focus-visible:ring-b-destructive/20'
      : 'border-b-input',
    leftIcon && 'pl-10',
    (rightIcon || type === 'password') && 'pr-10',
    className,
  );

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <Textarea
            id={inputId}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={(value as string) ?? ''}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={onBlur}
            className={cn(baseInputStyles, 'min-h-30 resize-none py-3')}
          />
        );

      case 'rich-text':
        return (
          <div className='overflow-hidden rounded-xl border border-input bg-background'>
            <ReactQuill
              theme='snow'
              value={(value as string) ?? ''}
              onChange={(value) => onChange?.(value)}
              placeholder={placeholder}
              modules={{
                toolbar: {
                  container: [
                    [{ header: [1, 2, 3, false] }],
                    [
                      'bold',
                      'italic',
                      'underline',
                      'strike',
                      'blockquote',
                      'code-block',
                    ],
                    ['image', 'link'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                  ],
                },
                clipboard: {
                  matchVisual: false,
                },
              }}
            />
          </div>
        );

      case 'phone':
        return (
          <PhoneInput
            country='rw'
            value={(value as string) ?? ''}
            onChange={onChange}
            disabled={disabled}
            inputClass='!h-9 !w-full !border-0 !border-b  !border-input 
            !rounded  !bg-accent/65 !text-accent-foreground px-2 py-1 !text-sm !shadow-sm !transition-colors !placeholder:text-muted-foreground !focus-visible:outline-none !focus-visible:ring-0 !border-b-2  !focus-visible:border-b-primary !disabled:cursor-not-allowed !disabled:opacity-50'
            buttonClass='!border-0 !border-b !border-input !bg-accent/65 !text-accent-foreground hover:!bg-accent hover:!text-accent-foreground focus:!bg-accent focus:!text-accent-foreground !transition-colors'
            containerClass='!w-full !bg-accent/65 !text-accent-foreground'
            dropdownClass='!bg-background !text-foreground !border-border !shadow-lg [&_.country:hover]:!bg-accent [&_.country:hover]:!text-accent-foreground [&_.country.highlight]:!bg-primary [&_.country.highlight]:!text-primary-foreground [&_.search]:!bg-background [&_.search]:!text-foreground [&_.search]:!border-border [&_.search-box]:!bg-background [&_.search-box]:!text-foreground [&_.search-box]:!border-border'
          />
        );

      case 'checkbox':
        return (
          <label className='flex items-center gap-2'>
            <Input
              type='checkbox'
              checked={!!value}
              onChange={(e) => onChange?.(e.target.checked)}
              disabled={disabled}
              className='h-4 w-4 rounded border-input'
            />

            <span className='text-sm'>{label}</span>
          </label>
        );

      case 'select':
        return (
          <Select
            name={name}
            disabled={disabled}
            value={value as string | undefined | ''}
            onValueChange={(value) => onChange?.(value)}
          >
            <SelectTrigger className={baseInputStyles} aria-invalid={!!error}>
              <SelectValue placeholder={placeholder || 'Select option'} />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectGroup>
                <SelectLabel>{placeholder || 'Select option'}</SelectLabel>
                {options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        );

      default:
        return (
          <div className='relative'>
            {leftIcon && (
              <div className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'>
                {leftIcon}
              </div>
            )}

            <Input
              id={inputId}
              name={name}
              type={
                type === 'password'
                  ? showPassword
                    ? 'text'
                    : 'password'
                  : type
              }
              value={(value as string) ?? ''}
              onChange={(e) => onChange?.(e.target.value)}
              onBlur={onBlur}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              autoComplete={autoComplete}
              className={baseInputStyles}
            />

            {type === 'password' ? (
              <button
                type='button'
                onClick={() => setShowPassword((prev) => !prev)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground'
              >
                {showPassword ? (
                  <EyeOff className='h-4 w-4' />
                ) : (
                  <Eye className='h-4 w-4' />
                )}
              </button>
            ) : (
              rightIcon && (
                <div className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'>
                  {rightIcon}
                </div>
              )
            )}
          </div>
        );
    }
  };

  return (
    <div className={cn('flex w-full flex-col gap-2', containerClassName)}>
      {type !== 'checkbox' && label && (
        <label
          htmlFor={inputId}
          className='text-sm font-medium text-foreground'
        >
          {label}
        </label>
      )}

      {description && (
        <p className='text-sm text-muted-foreground'>{description}</p>
      )}

      {renderField()}

      {/* {error && <p className='text-sm font-medium text-destructive'>{error}</p>} */}
    </div>
  );
}
