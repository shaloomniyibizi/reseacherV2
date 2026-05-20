'use client';

import { ThemeProvider } from '@/components/provider/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}
