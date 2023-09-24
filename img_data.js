const { Prisma } = require('@prisma/client');

const imageList = [
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/1.jpg',
    imgName: '짜파게티',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/2.webp',
    imgName: '후라이드 치킨',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/3.webp',
    imgName: '피자',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/4.webp',
    imgName: '제육볶음',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/5.webp',
    imgName: '샤브샤브',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/6.webp',
    imgName: '떡볶이',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/7.webp',
    imgName: '냉면',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/8.webp',
    imgName: '소떡소떡',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/9.webp',
    imgName: '토마토 파스타',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/10.webp',
    imgName: '스테이크',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/11.webp',
    imgName: '립아이 스테이크',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/12.webp',
    imgName: '초밥',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/13.webp',
    imgName: '김밥',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/14.webp',
    imgName: '햄버거',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/15.webp',
    imgName: '순두부찌개',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/16.webp',
    imgName: '간장게장',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/17.webp',
    imgName: '타코야끼',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/18.webp',
    imgName: '소갈비',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/19.webp',
    imgName: '커리',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/20.webp',
    imgName: '비프 스튜',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/21.webp',
    imgName: '짜장면',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/22.webp',
    imgName: '짬뽕',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/23.webp',
    imgName: '탕수육',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/24.webp',
    imgName: '오무라이스',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/25.webp',
    imgName: '꼬치구이',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/26.webp',
    imgName: '돈코츠 라멘',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/27.webp',
    imgName: '오렌지 치킨',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/28.webp',
    imgName: '볶음밥',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/29.webp',
    imgName: '만두',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/30.webp',
    imgName: '콘치즈',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/31.webp',
    imgName: '돈까스',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/32.webp',
    imgName: '계란 샌드위치',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/33.webp',
    imgName: '길거리 샌드위치',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/34.webp',
    imgName: '소세지',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/35.webp',
    imgName: '치킨마요',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/36.webp',
    imgName: '묵국',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/37.webp',
    imgName: '사시미',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/38.webp',
    imgName: '잡채',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/39.webp',
    imgName: '수육국밥',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/40.webp',
    imgName: '육회',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/41.webp',
    imgName: '족발',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/42.webp',
    imgName: '누룽지탕',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/43.webp',
    imgName: '조개 술찜',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/44.webp',
    imgName: '쌀국수',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/45.webp',
    imgName: '로스트 비프',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/46.webp',
    imgName: '전복죽',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/47.webp',
    imgName: '연어 스테이크',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/48.webp',
    imgName: '장어구이',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/49.webp',
    imgName: '똠얌꿍',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/50.webp',
    imgName: '치즈볼',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/51.webp',
    imgName: '양꼬치',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/52.webp',
    imgName: '부대찌게',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/53.webp',
    imgName: '핫도그',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/54.webp',
    imgName: '마파두부',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/55.webp',
    imgName: '아스파라거스 롤',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/56.webp',
    imgName: '애플파이',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/57.webp',
    imgName: '크루아상',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/58.webp',
    imgName: '맥앤치즈',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/59.webp',
    imgName: '우동',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/60.webp',
    imgName: '계란말이',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/61.webp',
    imgName: '미고렝',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/62.webp',
    imgName: '새우튀김',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/63.webp',
    imgName: '핫케이크',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/64.webp',
    imgName: '크레페',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/65.webp',
    imgName: '샐러드 파스타',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/66.webp',
    imgName: '부리또',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/67.webp',
    imgName: '베이컨말이',
  },
  {
    gameId: 1,
    imgUrl: 'https://storage.googleapis.com/image_tournament/68.webp',
    imgName: '도넛',
  },
];

export default imageList;
