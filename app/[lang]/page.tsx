import RootLayout from '../layout';
import dataList from '../../data';
import Header from '../components/Header';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import GroupButton from '../components/button/GroupButton';
import { fetchGames } from '../../utils/common';

const HomePage = async ({ searchParams }: any) => {
  const { t, lang } = useTranslation('main');

  const params = {
    sort: searchParams.sort || 'new',
    range: searchParams.range || 'all',
    gameType: searchParams.gameType || '',
    limit: searchParams.limit || 10,
  };

  const gameList = await fetchGames(params);

  return (
    <>
      <div className="container mx-auto max-w-screen-xl  ">
        <Header />
        <div className="flex pl-5 pr-5  justify-center flex-wrap ">
          <div className="filter  flex min-w-max max-w-xl">
            <GroupButton
              title="sort"
              options={[
                {
                  title: '인기순',
                  value: 'popular',
                },
                {
                  title: '최신순',
                  value: 'new',
                },
              ]}
              classInfo={{
                commonClass:
                  'px-4 py-2 text-sm font-medium border hover:bg-gray-100 hover:text-blue-700',
                selectedClass: 'bg-blue-700 text-white',
                unselectedClass: 'bg-white text-gray-900 border-gray-200',
              }}
            />
            <GroupButton
              title="range"
              options={[
                {
                  title: '전체',
                  value: 'all',
                },
                {
                  title: '월',
                  value: 'month',
                },
                {
                  title: '주',
                  value: 'week',
                },
                {
                  title: '일',
                  value: 'day',
                },
              ]}
              classInfo={{
                commonClass:
                  'px-4 py-2 text-sm font-medium border hover:bg-gray-100 hover:text-blue-700',
                selectedClass: 'bg-blue-700 text-white',
                unselectedClass: 'bg-white text-gray-900 border-gray-200',
              }}
            />
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
          {gameList && gameList.length > 0 ? (
            gameList.map((data: any) => {
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
                          <img
                            className=" h-full"
                            src={data.leftImage}
                            alt=""
                          />
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
            })
          ) : (
            <div className="col-span-4 text-center py-4">
              조회 결과가 없습니다
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
