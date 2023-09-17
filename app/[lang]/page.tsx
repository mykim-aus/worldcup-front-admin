'use client';

import RootLayout from '../layout';
import dataList from '../../data';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const HomePage = () => {
  const [sort, setSort] = useState('인기순');
  const [range, setRange] = useState('전체');
  const { t, lang } = useTranslation('main');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      if (!dataList.length) {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${API_URL}/api/game`, { method: 'GET' });
        if (response.ok) {
          const gameList = await response.json();
          if (JSON.stringify(gameList) !== JSON.stringify(dataList)) {
            // console.log(gameList[0].id);
            setDataList(gameList);
          }
        } else {
          console.error('API 호출 실패:', response.status);
        }
      }
    }

    fetchGames();
  }, []); // 종속성 배열에서 games 제거

  return (
    <>
      <div className="container mx-auto max-w-screen-xl  ">
        <Header />
        <div className="flex pl-5 pr-5  justify-center flex-wrap ">
          <div className="filter  flex min-w-max max-w-xl">
            <div className="inline-flex rounded-md m-2 mr-4 " role="group">
              <button
                type="button"
                className={
                  'px-4 py-2 text-sm font-medium    border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700' +
                  (sort == '인기순' ? ' bg-blue-700 text-white' : 'bg-white')
                }
                onClick={() => {
                  setSort('인기순');
                }}
              >
                {t('filter.Trending')}
              </button>
              <button
                type="button"
                className={
                  'px-4 py-2 text-sm font-medium text-gray-900  border-t border-b border-r border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700  ' +
                  (sort == '최신순' ? 'bg-blue-700 text-white' : 'bg-white')
                }
                onClick={() => {
                  setSort('최신순');
                }}
              >
                {t('filter.Newest')}
              </button>
            </div>
            <div className="inline-flex rounded-md m-2" role="group">
              <button
                type="button"
                className={
                  'px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 over:text-white ' +
                  (range == '전체' ? 'bg-blue-700 text-white ' : 'bg-white')
                }
                onClick={() => {
                  setRange('전체');
                }}
              >
                {t('filter.All')}
              </button>
              <button
                type="button"
                className={
                  'px-4 py-2 text-sm font-medium text-gray-900  border-r border-t border-b   border-gray-200  hover:bg-gray-100 hover:text-blue-700  ' +
                  (range == '월' ? 'bg-blue-700 text-white ' : 'bg-white')
                }
                onClick={() => {
                  setRange('월');
                }}
              >
                {t('filter.Month')}
              </button>
              <button
                type="button"
                className={
                  'px-4 py-2 text-sm font-medium text-gray-900  border-t border-b border-r border-gray-200  hover:bg-gray-100 hover:text-blue-700  ' +
                  (range == '주' ? 'bg-blue-700 text-white ' : 'bg-white')
                }
                onClick={() => {
                  setRange('주');
                }}
              >
                {t('filter.Week')}
              </button>
              <button
                type="button"
                className={
                  'px-4 py-2 text-sm font-medium text-gray-900  border-t border-b border-r border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 ' +
                  (range == '일' ? 'bg-blue-700 text-white ' : 'bg-white')
                }
                onClick={() => {
                  setRange('일');
                }}
              >
                {t('filter.Day')}
              </button>
            </div>
          </div>

          <div className="m-2 ml-5  flex justify-center w-full max-w-2xl  ">
            <input
              className=" w-2/3 border-l border-t border-b rounded-l-lg pt-2 pb-2 pl-1 "
              placeholder={t('searchingBar.input')}
            />
            <button className="border-r border-t border-b rounded-r-lg pt-2 pb-2 pr-1 pl-1">
              {t('searchingBar.searchBtn')}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 m-8 min-h-100 md:grid-cols-4 justify-items-center">
          {dataList.map((data: any) => {
            return (
              <>
                <Link href={lang + '/' + encodeURI(data.id) + '/tournament'}>
                  <div className="transition duration-150 h-full max-w-sm hover:ease-in-out hover:scale-110  relative group overflow-hidden  bg-white border border-gray-200 rounded-lg shadow ">
                    <div className=" z-10 absolute flex justify-center items-center bg-black w-full h-full rounded-xl bg-opacity-50 opacity-0 group-hover:opacity-100 ">
                      <h4 className=" text-white font-bold text-2xl ">
                        {t('game.start')}
                      </h4>
                    </div>
                    <div className="min-w-full p-2">
                      <h2 className="text-lg font-bold tracking-tight text-gray-900">
                        {t('game.title')}
                      </h2>
                      <h4> {t('game.about')}</h4>
                    </div>
                    <div className="grid grid-cols-2 object-center h-5/6  overflow-hidden z-5 ">
                      <div className="">
                        <img className=" h-full" src={data.leftImage} alt="" />
                        <p className=" absolute bottom-3 py-2 flex w-1/2  justify-center font-bold text-white">
                          {data.left}
                        </p>
                      </div>
                      <div className="">
                        <img
                          className=" h-full "
                          src={data.rightImage}
                          alt=""
                        />
                        <p className=" absolute bottom-3 p-2  flex w-1/2  justify-center font-bold  text-white">
                          {data.right}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
