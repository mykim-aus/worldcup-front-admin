import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="text-green-600">
      <p>{t('title')}</p>
    </div>
  );
}
