import axios from 'axios';

// yyyy-mm-dd hh:mm:ss 형식으로 변환
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}-${String(date.getDate()).padStart(2, '0')} ${String(
    date.getHours(),
  ).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(
    date.getSeconds(),
  ).padStart(2, '0')}`;
}

export async function fetchGames(filters: any) {
  const { sort, range, gameType, limit } = filters;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const reqUrl = `${API_URL}/api/game`;

  // fetch sample
  // const response = await fetch(reqUrl, {
  //   method: 'GET',
  //   cache: 'force-cache',
  //   next: {
  //     revalidate: false,
  //   },
  // });

  // if (response.ok) {
  //   // const gameList = await response.json();
  //   return gameList;
  // } else {
  //   console.error('API 호출 실패:', response.status);
  // }

  const response = await axios.get(reqUrl, {
    params: {
      sort: sort,
      range: range,
      gameType: gameType,
      limit: limit,
    },
  });

  if (response.status === 200 && response.statusText === 'OK') {
    const gameList = await response.data;

    return gameList;
  } else {
    console.error('API 호출 실패:', response.status);
  }
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
