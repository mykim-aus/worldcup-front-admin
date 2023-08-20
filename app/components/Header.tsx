import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeLangState } from '../../redux/features/LanguageSlice';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

function Header() {
  const lng = useAppSelector((state) => state.changeLangState.lang);

  const [eng, setEng] = useState(false);

  const { t, lang } = useTranslation('main');

  return (
    <div className="flex w-full p-5 flex-wrap">
      <div className="flex w-1/2  justify-start">
        <div className="p-2"> {t('header.Logo')}</div>
        <button className="p-2">{t('header.MakingGame')}</button>
      </div>

      {/* 언어 */}
      <div className=" flex w-1/2 items-center justify-end">
        <div className=" relative ">
          <button className=" justify-center flex items-center peer px-5 py-2 bg-white font-semibold   text-black rounded">
            <img className="w-auto h-5 pr-2" alt="#" src={'/icons/언어.png'} />
            <span>Language</span>
          </button>

          <div className="hidden z-50 peer-hover:flex hover:flex w-full flex-col bg-white drop-shadow-lg absolute">
            <button className=" flex justify-center text-slate-400 px-5 py-3 hover:bg-gray-200">
              <Link href={`/en`} as={`/en`}>
                en
              </Link>
            </button>
            <button className=" flex justify-center text-slate-400 px-5 py-3 hover:bg-gray-200">
              <Link href={`/ko`} as={`/ko`}>
                ko
              </Link>
            </button>
            <button className="flex justify-center text-slate-400 px-5 py-3 hover:bg-gray-200">
              <Link href={`/cn`} as={`/cn`}>
                cn
              </Link>
            </button>
            <button className="flex justify-center text-slate-400 px-5 py-3 hover:bg-gray-200">
              <Link href={`/ja`} as={`/ja`}>
                ja
              </Link>
            </button>
          </div>
        </div>
        <button className="flex justify-center items-center p-2 pl-5  font-semibold ">
          <img className="w-auto h-5 pr-2" alt="#" src={'/icons/로그인.png'} />
          {t('header.Login')}
        </button>
      </div>
    </div>
  );
}

export default Header;
