'use client';

import React, { useState, useEffect } from 'react';
import SelectCountModal from '../components/modals/SelectCountModal';
// import randomImg from '../../../randomImg.json';
import Image from 'next/image';
import { shuffleImgs } from '../../../utils/imageUtils';

interface Image {
  id: number;
  url: string;
}

export default function Tournament() {
  const [isModalOpen, setModalOpen] = useState(true); // 모달 여닫힘 여부
  const [totalRound, setTotalRound] = useState<number>(0);
  let [images, setImages] = useState<string[]>([]); // 이미지
  let [displays, setDisplays] = useState<string[]>([]); // 현재 보여줄 이미지 2장
  const [readyImage1, setReadyImage1] = useState<string[]>([]); // 대기 이미지 2장 - 1
  const [readyImage2, setReadyImage2] = useState<string[]>([]); // 대기 이미지 2장 - 2
  const [readyImage3, setReadyImage3] = useState<string[]>([]); // 대기 이미지 2장 - 3
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]); // 선택한 이미지
  const [round, setRound] = useState(1); // 현재 라운드
  const oriImages: string[] = []; // 총 원본 이미지
  for (let i = 1; i < 68; i++) {
    oriImages.push(`/food/${i}.webp`);
  }

  useEffect(() => {
    getPreloadImages(); // 8장 preload 대기
  }, []);

  // 모달 닫힘 처리
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  // 라운드 선택
  const handleSelectRound = async (round: any) => {
    await setTotalRound(round); // 총 라운드 수 업데이트
    handleCloseModal(); // 모달 닫기
    addImagesBasedOnRound(round); // 이미지를 라운드 수에 맞게 추가(8 + n)
    setInitialImages(); // 초기 이미지 세팅
  };

  // 초기 이미지 처리
  const setInitialImages = () => {
    setDisplays(images.slice(0, 2)); // 현재 보여줄 이미지 2장
    setReadyImage1(images.slice(2, 4)); // 대기 이미지 2장 - 1
    setReadyImage2(images.slice(4, 6)); // 대기 이미지 2장 - 2
    setReadyImage3(images.slice(6, 8)); // 대기 이미지 2장 - 3
  };

  // 이미지 preload 8장 가져오기
  const getPreloadImages = async () => {
    const newImages = oriImages; // shuffle
    const shuffledImages = shuffleImgs(newImages); // shuffle
    const preloadImages = shuffledImages.slice(0, 8); // 원본은 count자르기 구현
    setImages([...preloadImages]);
  };

  // 라운드 선택 시 이미지 추가
  const addImagesBasedOnRound = (round: number) => {
    const newImages = oriImages.filter((img) => !images.includes(img)); // 8장 안 넣은 이미지로만
    const shuffledImages = shuffleImgs(newImages); // 이미지 섞기
    const addImages = shuffledImages.slice(0, round * 2 - 8);
    setImages((prevImages) => [...prevImages, ...addImages]); // 이미지 배열 업데이트
  };

  // 이미지 클릭 시 처리하는 함수
  const handleImageClick = async (clickedIndex: number) => {
    if (images.length > 2) {
      if (totalRound > round) {
        setSelectedIndex((prevSelectedIndex) => [
          ...prevSelectedIndex,
          (round - 1) * 2 + clickedIndex,
        ]);

        setDisplays(() => [...readyImage1]);
        setReadyImage1(() => [...readyImage2]);
        setReadyImage2(() => [...readyImage3]);

        // 남은 라운드가 2라운드 이상이면 대기 이미지를 세팅
        if (totalRound - round > 1) {
          setReadyImage3(() => images.slice(2 * round + 6, 2 * round + 6 + 2));
        } else {
          setReadyImage3([]);
        }

        setRound((prevRound) => prevRound + 1); // 라운드 업데이트
        // 마지막일 경우
      } else if (totalRound === round) {
        // 비동기 문제 해결을 위해 생성 처리
        const newSelectedIndex = [
          ...selectedIndex,
          (round - 1) * 2 + clickedIndex,
        ];
        setSelectedIndex(newSelectedIndex);

        // 이미지 필터링
        const filteredImages = images.filter((_, index) =>
          newSelectedIndex.includes(index),
        );

        // 해당 이미지 셔플 후 적용
        const shuffledImages = shuffleImgs(filteredImages);
        setImages([...shuffledImages]);

        // 라운드, 총 라운드, 선택 이미지 초기화
        setRound(1);
        setTotalRound((prevTotalRound) => prevTotalRound / 2);
        setSelectedIndex([]);
        setInitialImages();
      }
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
              월드컵 {totalRound}강 ({round}/{totalRound})
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            {displays.map((image, index) => {
              return (
                <div className="mb-4 sm:mb-0 sm:mr-4">
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
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
