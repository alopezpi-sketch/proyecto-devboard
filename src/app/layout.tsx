// ✅ Server Component — solo renderiza HTML
import { AppProviders } from './AppProviders';
import './globals.css';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppProviders>
            {children}
        </AppProviders>
      </body>
    </html>
  );
}
