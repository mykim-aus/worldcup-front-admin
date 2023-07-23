import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '../redux/provider';
import { store } from '../redux/store';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'New Project',
  description: 'For Topic Tournament!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
