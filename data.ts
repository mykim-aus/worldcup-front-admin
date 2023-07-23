import { data } from 'autoprefixer';

const dataList = [
  {
    id: 1,
    gameTitle: '웹툰 월드컵',
    content: '설명, 게임을 시작해보세요',
    left: '화산귀환',
    leftImage:
      'https://image-comic.pstatic.net/webtoon/769209/thumbnail/thumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg',
    right: '신혼일기',
    rightImage:
      'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_f391c11a-9a74-4e0c-b601-2fcebafffd07.jpg',
  },
  {
    id: 2,
    gameTitle: '여자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '카리나',
    leftImage:
      'https://image.fmkorea.com/files/attach/new2/20211213/3655109/3035547727/4159963744/413c6917acef82c151f66f4c71a26792.jpeg',
    right: '장원영',
    rightImage:
      'https://image.blip.kr/v1/file/1b4a3f9d8a66a864bbc61b0b85fc7324',
  },
  {
    id: 3,
    gameTitle: '남자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '차은우',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDVfNzEg%2FMDAxNjQ2NDI2MDI1NjE4.qRYdwM4lSLi6_KB3O-8S5RprSv9WRjLrOo4jUwClJ6kg.MrWLWGWqnnbzWafMknmDup5uyGWhN6zTZOY4fFhCyWog.JPEG.starlight804%2F20220305%25A3%25DF051819.jpg&type=a340',
    right: '뷔',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDdfMTUz%2FMDAxNjQ2NjM2MjgyMTQ0.3ypwdBPzn_tAvuf82ZvEwZpKdp5gKM0zp599EX2frn8g.N6hGlcyP4ctAQbaYnaWEdqA1DSDMoS85nSQ-RseO1g0g.JPEG.sally981203%2FIMG%25A3%25DF20200401%25A3%25DF132928.jpg&type=sc960_832',
  },
  {
    id: 4,
    gameTitle: '남자배우 월드컵',
    content: '게임을 시작해보세요',
    left: '안효섭',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F477%2F2022%2F12%2F31%2F0000402921_001_20221231192602903.jpg&type=sc960_832',
    right: '이도현',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F10%2F22%2F202010221418291910_3_20201022142143723.jpg&type=sc960_832',
  },
  {
    id: 1,
    gameTitle: '웹툰 월드컵',
    content: '설명, 게임을 시작해보세요',
    left: '화산귀환',
    leftImage:
      'https://image-comic.pstatic.net/webtoon/769209/thumbnail/thumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg',
    right: '신혼일기',
    rightImage:
      'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_f391c11a-9a74-4e0c-b601-2fcebafffd07.jpg',
  },
  {
    id: 2,
    gameTitle: '여자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '카리나',
    leftImage:
      'https://image.fmkorea.com/files/attach/new2/20211213/3655109/3035547727/4159963744/413c6917acef82c151f66f4c71a26792.jpeg',
    right: '장원영',
    rightImage:
      'https://image.blip.kr/v1/file/1b4a3f9d8a66a864bbc61b0b85fc7324',
  },
  {
    id: 3,
    gameTitle: '남자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '차은우',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDVfNzEg%2FMDAxNjQ2NDI2MDI1NjE4.qRYdwM4lSLi6_KB3O-8S5RprSv9WRjLrOo4jUwClJ6kg.MrWLWGWqnnbzWafMknmDup5uyGWhN6zTZOY4fFhCyWog.JPEG.starlight804%2F20220305%25A3%25DF051819.jpg&type=a340',
    right: '뷔',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDdfMTUz%2FMDAxNjQ2NjM2MjgyMTQ0.3ypwdBPzn_tAvuf82ZvEwZpKdp5gKM0zp599EX2frn8g.N6hGlcyP4ctAQbaYnaWEdqA1DSDMoS85nSQ-RseO1g0g.JPEG.sally981203%2FIMG%25A3%25DF20200401%25A3%25DF132928.jpg&type=sc960_832',
  },
  {
    id: 4,
    gameTitle: '남자배우 월드컵',
    content: '게임을 시작해보세요',
    left: '안효섭',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F477%2F2022%2F12%2F31%2F0000402921_001_20221231192602903.jpg&type=sc960_832',
    right: '이도현',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F10%2F22%2F202010221418291910_3_20201022142143723.jpg&type=sc960_832',
  },
  {
    id: 1,
    gameTitle: '웹툰 월드컵',
    content: '설명, 게임을 시작해보세요',
    left: '화산귀환',
    leftImage:
      'https://image-comic.pstatic.net/webtoon/769209/thumbnail/thumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg',
    right: '신혼일기',
    rightImage:
      'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_f391c11a-9a74-4e0c-b601-2fcebafffd07.jpg',
  },
  {
    id: 2,
    gameTitle: '여자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '카리나',
    leftImage:
      'https://image.fmkorea.com/files/attach/new2/20211213/3655109/3035547727/4159963744/413c6917acef82c151f66f4c71a26792.jpeg',
    right: '장원영',
    rightImage:
      'https://image.blip.kr/v1/file/1b4a3f9d8a66a864bbc61b0b85fc7324',
  },
  {
    id: 3,
    gameTitle: '남자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '차은우',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDVfNzEg%2FMDAxNjQ2NDI2MDI1NjE4.qRYdwM4lSLi6_KB3O-8S5RprSv9WRjLrOo4jUwClJ6kg.MrWLWGWqnnbzWafMknmDup5uyGWhN6zTZOY4fFhCyWog.JPEG.starlight804%2F20220305%25A3%25DF051819.jpg&type=a340',
    right: '뷔',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDdfMTUz%2FMDAxNjQ2NjM2MjgyMTQ0.3ypwdBPzn_tAvuf82ZvEwZpKdp5gKM0zp599EX2frn8g.N6hGlcyP4ctAQbaYnaWEdqA1DSDMoS85nSQ-RseO1g0g.JPEG.sally981203%2FIMG%25A3%25DF20200401%25A3%25DF132928.jpg&type=sc960_832',
  },
  {
    id: 4,
    gameTitle: '남자배우 월드컵',
    content: '게임을 시작해보세요',
    left: '안효섭',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F477%2F2022%2F12%2F31%2F0000402921_001_20221231192602903.jpg&type=sc960_832',
    right: '이도현',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F10%2F22%2F202010221418291910_3_20201022142143723.jpg&type=sc960_832',
  },
  {
    id: 1,
    gameTitle: '웹툰 월드컵',
    content: '설명, 게임을 시작해보세요',
    left: '화산귀환',
    leftImage:
      'https://image-comic.pstatic.net/webtoon/769209/thumbnail/thumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg',
    right: '신혼일기',
    rightImage:
      'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_f391c11a-9a74-4e0c-b601-2fcebafffd07.jpg',
  },
  {
    id: 2,
    gameTitle: '여자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '카리나',
    leftImage:
      'https://image.fmkorea.com/files/attach/new2/20211213/3655109/3035547727/4159963744/413c6917acef82c151f66f4c71a26792.jpeg',
    right: '장원영',
    rightImage:
      'https://image.blip.kr/v1/file/1b4a3f9d8a66a864bbc61b0b85fc7324',
  },
  {
    id: 3,
    gameTitle: '남자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '차은우',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDVfNzEg%2FMDAxNjQ2NDI2MDI1NjE4.qRYdwM4lSLi6_KB3O-8S5RprSv9WRjLrOo4jUwClJ6kg.MrWLWGWqnnbzWafMknmDup5uyGWhN6zTZOY4fFhCyWog.JPEG.starlight804%2F20220305%25A3%25DF051819.jpg&type=a340',
    right: '뷔',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDdfMTUz%2FMDAxNjQ2NjM2MjgyMTQ0.3ypwdBPzn_tAvuf82ZvEwZpKdp5gKM0zp599EX2frn8g.N6hGlcyP4ctAQbaYnaWEdqA1DSDMoS85nSQ-RseO1g0g.JPEG.sally981203%2FIMG%25A3%25DF20200401%25A3%25DF132928.jpg&type=sc960_832',
  },
  {
    id: 4,
    gameTitle: '남자배우 월드컵',
    content: '게임을 시작해보세요',
    left: '안효섭',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F477%2F2022%2F12%2F31%2F0000402921_001_20221231192602903.jpg&type=sc960_832',
    right: '이도현',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F10%2F22%2F202010221418291910_3_20201022142143723.jpg&type=sc960_832',
  },
  {
    id: 1,
    gameTitle: '웹툰 월드컵',
    content: '설명, 게임을 시작해보세요',
    left: '화산귀환',
    leftImage:
      'https://image-comic.pstatic.net/webtoon/769209/thumbnail/thumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg',
    right: '신혼일기',
    rightImage:
      'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_f391c11a-9a74-4e0c-b601-2fcebafffd07.jpg',
  },
  {
    id: 2,
    gameTitle: '여자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '카리나',
    leftImage:
      'https://image.fmkorea.com/files/attach/new2/20211213/3655109/3035547727/4159963744/413c6917acef82c151f66f4c71a26792.jpeg',
    right: '장원영',
    rightImage:
      'https://image.blip.kr/v1/file/1b4a3f9d8a66a864bbc61b0b85fc7324',
  },
  {
    id: 3,
    gameTitle: '남자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '차은우',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDVfNzEg%2FMDAxNjQ2NDI2MDI1NjE4.qRYdwM4lSLi6_KB3O-8S5RprSv9WRjLrOo4jUwClJ6kg.MrWLWGWqnnbzWafMknmDup5uyGWhN6zTZOY4fFhCyWog.JPEG.starlight804%2F20220305%25A3%25DF051819.jpg&type=a340',
    right: '뷔',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDdfMTUz%2FMDAxNjQ2NjM2MjgyMTQ0.3ypwdBPzn_tAvuf82ZvEwZpKdp5gKM0zp599EX2frn8g.N6hGlcyP4ctAQbaYnaWEdqA1DSDMoS85nSQ-RseO1g0g.JPEG.sally981203%2FIMG%25A3%25DF20200401%25A3%25DF132928.jpg&type=sc960_832',
  },
  {
    id: 4,
    gameTitle: '남자배우 월드컵',
    content: '게임을 시작해보세요',
    left: '안효섭',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F477%2F2022%2F12%2F31%2F0000402921_001_20221231192602903.jpg&type=sc960_832',
    right: '이도현',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F10%2F22%2F202010221418291910_3_20201022142143723.jpg&type=sc960_832',
  },
  {
    id: 1,
    gameTitle: '웹툰 월드컵',
    content: '설명, 게임을 시작해보세요',
    left: '화산귀환',
    leftImage:
      'https://image-comic.pstatic.net/webtoon/769209/thumbnail/thumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg',
    right: '신혼일기',
    rightImage:
      'https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_f391c11a-9a74-4e0c-b601-2fcebafffd07.jpg',
  },
  {
    id: 2,
    gameTitle: '여자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '카리나',
    leftImage:
      'https://image.fmkorea.com/files/attach/new2/20211213/3655109/3035547727/4159963744/413c6917acef82c151f66f4c71a26792.jpeg',
    right: '장원영',
    rightImage:
      'https://image.blip.kr/v1/file/1b4a3f9d8a66a864bbc61b0b85fc7324',
  },
  {
    id: 3,
    gameTitle: '남자아이돌 월드컵',
    content: '게임을 시작해보세요',
    left: '차은우',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDVfNzEg%2FMDAxNjQ2NDI2MDI1NjE4.qRYdwM4lSLi6_KB3O-8S5RprSv9WRjLrOo4jUwClJ6kg.MrWLWGWqnnbzWafMknmDup5uyGWhN6zTZOY4fFhCyWog.JPEG.starlight804%2F20220305%25A3%25DF051819.jpg&type=a340',
    right: '뷔',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDdfMTUz%2FMDAxNjQ2NjM2MjgyMTQ0.3ypwdBPzn_tAvuf82ZvEwZpKdp5gKM0zp599EX2frn8g.N6hGlcyP4ctAQbaYnaWEdqA1DSDMoS85nSQ-RseO1g0g.JPEG.sally981203%2FIMG%25A3%25DF20200401%25A3%25DF132928.jpg&type=sc960_832',
  },
  {
    id: 4,
    gameTitle: '남자배우 월드컵',
    content: '게임을 시작해보세요',
    left: '안효섭',
    leftImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F477%2F2022%2F12%2F31%2F0000402921_001_20221231192602903.jpg&type=sc960_832',
    right: '이도현',
    rightImage:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F10%2F22%2F202010221418291910_3_20201022142143723.jpg&type=sc960_832',
  },
];

export default dataList;
