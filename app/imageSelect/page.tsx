'use client';

import React, { useState, useEffect } from 'react';
import SelectCountModal from '../components/modals/SelectCountModal';
// import { fetchImages } from '../api/fetchImages'; // api 호출 함수, 시간당 50번이라 가져온 뒤 미사용
import randomImg from '../../randomImg.json';
import Image from 'next/image';
import { shuffleImgs } from '../../utils/imageUtils';

interface Image {
  id: number;
  url: string;
}

export default function Tournament() {
  const [isModalOpen, setModalOpen] = useState(true); // 모달 여닫힘 여부
  const [totalRound, setTotalRound] = useState(8); // 총 라운드 수 최소 4강이므로 8
  let [images, setImages] = useState<Image[]>([]); // api 호출 이미지
  const [displays, setDisplays] = useState<Image[]>([]); // 현재 보여줄 이미지
  const [winners, setWinners] = useState<Image[]>([]); // 이긴 이미지 모음
  const [round, setRound] = useState(1); // 현재 라운드

  // 모달 닫힘 처리
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  // 라운드 선택 시, 모달 닫힘 처리 및 round값 가져오기
  const handleSelectRound = (round: any) => {
    setTotalRound(round);
    setModalOpen(false);
  };

  // 이미지 가져와서 preload
  const getImages = async (count: number) => {
    // const newImages = await fetchImages(count); // 원본
    let newImages = randomImg;
    newImages = shuffleImgs(newImages); // shuffle
    newImages = newImages.slice(0, count); // 원본은 count자르기 구현

    setImages((prevImages) => [...prevImages, ...newImages]); // set
    shuffleImgs(newImages); // shuffle
    preloadImages(newImages.map((image: Image) => image)); //preload
  };

  // 이미지 preload
  const preloadImages = (images: Image[]) => {
    images.forEach((img) => {
      const imageElement = document.createElement('img');
      imageElement.src = img.url;
    });
  };

  // 이미지 클릭 시 처리
  const handleImageClick = (clickedImage: Image) => {
    setWinners((prevWinners) => [...prevWinners, clickedImage]);
    if (round + 1 <= totalRound) {
      const startIndex = round * 2;
      const endIndex = startIndex + 2;
      setDisplays(images.slice(startIndex, endIndex));
      setRound((prevRound) => prevRound + 1);

      console.log(startIndex);
      console.log(endIndex);
    } else {
      setWinners((prevWinners: any) => [...prevWinners, totalRound]);
      images = winners;
      setRound(1);
    }
    console.log('round', round);
    console.log('totalRound', totalRound);
    console.log('winners', winners);
  };

  useEffect(() => {
    if (totalRound <= 8) {
      getImages(totalRound);
    } else if (totalRound > 8) {
      getImages(totalRound - 8);
    }
  }, []);

  useEffect(() => {
    if (images.length >= 2) {
      setDisplays([images[0], images[1]]);
    }
  }, [images]);

  return (
    <div className="flex items-center justify-center">
      {isModalOpen && (
        <SelectCountModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectRound={handleSelectRound}
          title={''}
        />
      )}
      {!isModalOpen && (
        <div className="w-full">
          <div className="bg-white w-full h-1/12 p-4 flex items-center justify-center">
            <h1 className="text-black text-center text-2xl font-bold">
              월드컵 {totalRound}강 ({round}/{totalRound})
            </h1>
          </div>
          <div className="flex items-center justify-center">
            {displays.map((image: Image, index) => {
              return (
                <div className="flex-1" key={image.id}>
                  <img
                    key={image.id}
                    src={image.url}
                    height={400}
                    width={400}
                    alt={`image-${index}`}
                    loading="lazy"
                    onClick={() => handleImageClick(image)}
                  />
                  {/* <link
                    rel="preload"
                    as="image"
                    type="image/webp"
                    image
                    >
                  </link> */}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// export default function ParentComponent() {
//   const [isModalOpen, setModalOpen] = useState(true); // 모달 여닫힘 여부
//   const [totalRound, setTotalRound] = useState(4); // 기본 라운드 수 default4
//   const [images, setImages] = useState<Image[]>([]); // api 호출 이미지
//   const [currentImages, setCurrentImages] = useState<Image[]>([]); // 현재 이미지
//   const [chosenImages, setChosenImages] = useState<number[]>([]);
//   const [round, setRound] = useState(1);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSelectRound = (round: any) => {
//     setTotalRound(round);
//     setModalOpen(false);
//   };

//   const handleSelectImage = (id: number) => {
//     setChosenImages([...chosenImages, id]);

//     const newImages = currentImages.filter((image) => image.id !== id);
//     setCurrentImages(newImages.slice(0, 2));

//     // 선택한 이미지의 스타일을 변경하기 위해 ref를 사용합니다
//     const selectedImageRef = document.getElementById(`image-${id}`);
//     if (selectedImageRef) {
//       selectedImageRef.style.transform = 'scale(1.1)';
//     }

//     // 나머지 이미지에 대해서는 스타일을 초기화합니다
//     const remainingImages = currentImages.filter((image) => image.id !== id);
//     remainingImages.forEach((image) => {
//       const imageRef = document.getElementById(`image-${image.id}`);
//       if (imageRef) {
//         imageRef.style.transform = 'scale(1)';
//       }
//     });

//     if (newImages.length < 2) {
//       const remainingImages = images.filter(
//         (image) => !chosenImages.includes(image.id),
//       );
//       setCurrentImages(remainingImages.slice(0, 2));

//       if (remainingImages.length < 2) {
//         getImages(8); // If there are less than 2 remaining images, fetch 8 more
//       }
//     }
//   };

//   const preloadImages = (urls: string[]) => {
//     urls.forEach((url) => {
//       const img = {
//         src: url,
//       };
//       // img.src = url;
//     });
//   };

//   const getImages = async (count: number) => {
//     const newImages = await fetchImages(count);
//     setImages((prevImages) => [...prevImages, ...newImages]);
//     preloadImages(newImages.map((image: Image) => image.url)); // Preload fetched images
//   };

//   useEffect(() => {
//     if (totalRound <= 4) {
//       getImages(totalRound);
//     } else if (totalRound > 4) {
//       getImages(totalRound - 4);
//     }
//   }, [totalRound]);

//   useEffect(() => {
//     if (images.length >= 2) {
//       setCurrentImages(images.slice(0, 2));
//     }
//   }, [images]);

//   return (
//     <div>
//       <button
//         onClick={handleOpenModal}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         라운드 선택
//       </button>
//       {isModalOpen && (
//         <SelectCountModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           onSelectRound={handleSelectRound}
//           title={''}
//         />
//       )}
//       {totalRound && (
//         <p className="text-lg">선택된 라운드: {totalRound}</p>
//       )}
//       <p className="text-lg">
//         현재 라운드: {round} / {totalRound}
//       </p>
//       {/*//!@#$: 현재 라운드를 표시*/}

//       <div className="flex justify-center">
//         {currentImages.map((image, index) => (
//           <picture>
//             <Image
//               className="flex justify-center items-center h-1/5 w-auto m-4 opacity-100 transition-opacity duration-300 ease-in-out image-container"
//               key={image.id}
//               src={image.url}
//               height={300}
//               width={300}
//               alt={`image-${index}`}
//               quality={80}
//               blurDataURL="data:image/jpeg..."
//               onClick={() => handleSelectImage(image.id)}
//               priority={true}
//             />
//           </picture>
//           // <div
//           //   key={image.id}
//           //   className="flex justify-center items-center h-1/5 w-auto m-4 opacity-100 transition-opacity duration-300 ease-in-out image-container"
//           // >

//           //     src={image.url}
//           //     alt=""
//           //     className="h-1/4 cursor-pointer"
//           //     onClick={() => handleSelectImage(image.id)}
//           //   />
//           // </div>
//         ))}
//       </div>
//     </div>
//   );
// }
