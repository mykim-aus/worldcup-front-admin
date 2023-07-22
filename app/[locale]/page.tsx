import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');
  const r = useTranslations('auth');
  const s = useTranslations();
  return (
    <div className="text-green-600">
      <p>{t('edit')}</p>
      <p>{r('login')}</p>
      <p>{s('common.regist')}</p>
    </div>
  );
}
