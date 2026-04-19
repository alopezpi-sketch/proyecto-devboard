// ✅ Client Component — usa Context Providers que dependen de estado y hooks
'use client';

import { NotificationProvider } from '@/context/notification/NotificationContext';
import { ThemeProvider } from '@/context/theme/ThemeContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <NotificationProvider>
                {children}
            </NotificationProvider>
        </ThemeProvider>
    );
}