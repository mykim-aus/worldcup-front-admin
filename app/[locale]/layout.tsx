import './globals.css';
import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
// import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'New Project',
  description: 'For Topic Tournament!',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
