'use client';

import React, { useState, useEffect } from 'react';
import SelectCountModal from '../components/modals/SelectCountModal';
// import randomImg from '../../../randomImg.json';
import Image from 'next/image';
import { shuffleImgs } from '../../utils/imageUtils';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Image {
  id: number;
  url: string;
}

export default function Tournament() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isModalOpen, setModalOpen] = useState(true); // 모달 여닫기 상태
  const [totalRound, setTotalRound] = useState<number>(0); // 총 라운드
  const [images, setImages] = useState<string[]>([]); // 총 이미지 배열 현재는 string 배열
  const [currentImages, setCurrentImages] = useState<string[]>([]); // 현재 보여줄 이미지 2장
  const [nextImages, setNextImages] = useState<string[]>([]); // 다음에 보여줄 이미지 2장
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]); // 선택된 이미지 idx
  const [round, setRound] = useState(1); // 현재 라운드
  const [finalImage, setFinalImage] = useState<any>(null); // 클릭한 이미지 상태
  const oriImages = Array.from(
    { length: 67 },
    (_, i) => `/images/food/${i + 1}.webp`,
  ); // 호출 이미지 배열, 현재는 idx에 주소만 넣는 중

  useEffect(() => {
    getPreloadImages();
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSelectRound = (round: any) => {
    setTotalRound(round);
    handleCloseModal();
    addImagesBasedOnRound(round);
    setInitialImages();
  };

  const setInitialImages = () => {
    setCurrentImages(images.slice(0, 2)); // 현재 보여줄 이미지 2장
    setNextImages(images.slice(2, 4)); // 다음에 보여줄 이미지 2장
  };

  const getPreloadImages = () => {
    // 미리 보여줄 이미지 8장, 최소 단위
    const shuffledImages = shuffleImgs(oriImages);
    const preloadImages = shuffledImages.slice(0, 8);
    setImages([...preloadImages]);
  };

  const addImagesBasedOnRound = (round: number) => {
    // 라운드에 따라 이미지 추가
    const newImages = oriImages.filter((img) => !images.includes(img));
    const shuffledImages = shuffleImgs(newImages);
    const addImages = shuffledImages.slice(0, round * 2 - 8);
    setImages((prevImages) => [...prevImages, ...addImages]);
  };

  const handleImageClick = (clickedIndex: number) => {
    // 이미지 클릭 시
    if (images.length > 2) {
      if (totalRound > round) {
        setSelectedIndex((prevSelectedIndex) => [
          ...prevSelectedIndex,
          (round - 1) * 2 + clickedIndex,
        ]);
        setCurrentImages(() => [...nextImages]); // 다음 이미지를 현재 이미지로 설정
        setNextImages(() => images.slice(2 * round + 2, 2 * round + 4)); // 새로운 다음 이미지를 설정
        setRound((prevRound) => prevRound + 1);
      } else if (totalRound === round) {
        const newSelectedIndex = [
          ...selectedIndex,
          (round - 1) * 2 + clickedIndex,
        ];
        setSelectedIndex(newSelectedIndex);

        const filteredImages = images.filter((_, index) =>
          newSelectedIndex.includes(index),
        );

        const shuffledImages = shuffleImgs(filteredImages);

        setImages(shuffledImages);
        setRound(1);
        setTotalRound((prevTotalRound) => prevTotalRound / 2);
        setSelectedIndex([]);
        setInitialImages();
      }
    } else {
      const finalImage = images[clickedIndex];

      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set('finalImage', finalImage);
      const search = current.toString();
      const query = search ? `?${search}` : '';
      const pathname = '../tournamentResult';
      router.push(`${pathname}${query}`);

      //이렇게 하지 말고, 쿠키 저장하고, 페이지 이동 후, 쿠키에서 불러오는 방식으로.
    }
  };

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
              {totalRound === 1
                ? '월드컵 결승전'
                : totalRound === 2
                ? '월드컵 준결승전'
                : `월드컵 ${totalRound}강 (${round}/${totalRound})`}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            {currentImages.map((image, index) => {
              return (
                <div className="mb-4 sm:mb-0 sm:mr-4 relative">
                  {' '}
                  {/* 이미지와 텍스트가 들어갈 div에 relative 클래스 추가 */}
                  <Image
                    key={index}
                    src={image}
                    width={1200}
                    height={1200}
                    quality={60}
                    alt={`image-${index}`}
                    priority={true}
                    onClick={() => {
                      handleImageClick(index);
                    }}
                  />
                  <span className="absolute left-1/2 bottom-3 transform translate-x-[-50%] text-white text-2xl text-shadow">
                    한글
                  </span>{' '}
                  {/* 텍스트에 absolute 클래스 추가, left-1/2, bottom-1/6 클래스로 위치 지정, transform translate-x-[-50%]로 정확한 중앙 정렬 */}
                </div>
              );
            })}
          </div>
          <Link
            href={{ pathname: '../tournamentResult', query: { finalImage } }}
          ></Link>
        </div>
      )}
    </div>
  );
}
