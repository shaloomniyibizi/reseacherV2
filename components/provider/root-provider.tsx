'use client';

import { ThemeProvider } from '@/components/provider/theme-provider';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ToastContainer />
    </ThemeProvider>
  );
}
