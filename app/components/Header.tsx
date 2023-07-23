import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeLangState } from '../../redux/features/LanguageSlice';

function Header() {
  const lang = useAppSelector((state) => state.changeLangState.lang);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeLangState(navigator.language.split('-')[0].toUpperCase()));
  }, []);

  const [eng, setEng] = useState(false);
  return (
    <div className="flex w-full p-5 flex-wrap">
      <div className="flex w-1/2  justify-start">
        <div className="p-2">로고</div>
        <button className="p-2">게임 만들기</button>
      </div>

      {/* 언어 */}
      <div className=" flex w-1/2 items-center justify-end">
        <div className=" relative ">
          <button className=" justify-center flex items-center peer px-5 py-2 bg-white font-semibold   text-black rounded">
            <img className="w-auto h-5 pr-2" alt="#" src={'/icons/언어.png'} />
            <span>{lang}</span>
          </button>

          <div className="hidden peer-hover:flex hover:flex w-full flex-col bg-white drop-shadow-lg absolute">
            <button className=" flex justify-center text-slate-400 px-5 py-3 hover:bg-gray-200">
              EN
            </button>
            <button className=" flex justify-center text-slate-400 px-5 py-3 hover:bg-gray-200">
              JA
            </button>
            <button className="flex justify-center text-slate-400 px-5 py-3 hover:bg-gray-200">
              CN
            </button>
          </div>
        </div>

        {/* <img className="w-auto h-5" alt="#" src={'/icons/언어.png'} /> */}
        {/* 
        <div className="flex">
          <button className="font-extrabold  p-2">{eng ? `EN` : lang}</button>
          <div className="flex items-center text-neutral-200">|</div>
          <button
            className="font-extrabold text-neutral-200 p-2"
            onClick={() => {
              setEng((prev) => !prev);
            }}
          >
            {eng ? lang : `EN`}
          </button>
          <div className="flex items-center text-neutral-200">|</div>
          <button
            className="font-extrabold text-neutral-200 p-2"
            onClick={() => {
              setEng((prev) => !prev);
            }}
          ></button>
        </div> */}
        {/* 언어 */}
        <button className="flex justify-center items-center p-2 pl-5  font-semibold ">
          <img className="w-auto h-5 pr-2" alt="#" src={'/icons/로그인.png'} />
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
