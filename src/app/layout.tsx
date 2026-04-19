// ✅ Server Component — solo renderiza HTML
import { AppProviders } from './AppProviders';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AppProviders>
            {children}
        </AppProviders>
      </body>
    </html>
  );
}
