import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '../redux/provider';
import { store } from '../redux/store';
import { Metadata } from 'next';
import useTranslation from 'next-translate/useTranslation';
import i18n from '../i18n';
import { redirect } from 'next/navigation';

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
  const { t, lang } = useTranslation('main');

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
