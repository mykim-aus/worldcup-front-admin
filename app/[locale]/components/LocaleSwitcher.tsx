import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function Home() {
  const t = useTranslations('common');

  return (
    <div>
      <div>
        <Link href="/" locale="en">
          {t('en')}
        </Link>{' '}
        |{' '}
        <Link href="/" locale="ko">
          {t('ko')}
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}
