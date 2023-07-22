import axios from 'axios';

const fetchImages = async (count) => {
  const response = await axios.get('https://api.unsplash.com/photos/random', {
    params: {
      client_id: 'Hxs-m9N29yhjkGRyEzwpQlZoOrL0aIsLPqfaGydHK-M',
      count: count,
      page: 1,
      w: 300, // 이미지의 너비를 300픽셀로 제한
    },
    headers: {
      Accept: 'application/json',
    },
  });

  // 이미지 url의 webp 형식으로 변환 및 배열 형태로 변경
  const images = response.data.map((image, idx) => {
    return {
      id: idx + 1,
      url: `${image.urls.small}?fm=webp`, // webp 형식으로 변환
    };
  });

  console.log(images);

  return images;
};

export { fetchImages };
