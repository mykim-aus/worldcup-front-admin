import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common2');
  return (
    <div className="text-green-600">
      <p>{t('edit')}</p>
    </div>
  );
}
