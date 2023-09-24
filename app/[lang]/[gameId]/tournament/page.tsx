'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { shuffleImgs } from '../../../../utils/imageUtils';
import SelectCountModal from '../../../components/modals/SelectCountModal';
import { useRouter, usePathname } from 'next/navigation';
import Header from '../../../components/Header';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import Comment from '../../../components/Comment';

interface Image {
  id: number;
  gameId: number;
  imgUrl: string;
  imgName: string;
  winCount: number;
}

type GameState = {
  isLoading: boolean;
  isModalOpen: boolean;
  oriImages: Image[];
  images: Image[];
  isGameEnd: boolean;
  totalRound: number;
  currentImages: Image[];
  nextImages: Image[];
  selectedImage: Image[];
  round: number;
  finalImage?: Image; // finalImage는 optional로 처리하여 undefined를 허용
};

export default async function Tournament(props: any) {
  const gameId = Number(props.params.gameId);

  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
  const currentPath: any = API_URL + usePathname();

  const [state, setState] = useState<GameState>({
    isLoading: true,
    isModalOpen: true,
    oriImages: [],
    images: [],
    isGameEnd: false,
    totalRound: 0,
    currentImages: [],
    nextImages: [],
    selectedImage: [],
    round: 1,
    finalImage: undefined,
  });

  // 선택 게임 Id 기준 이미지 호출
  useEffect(() => {
    async function fetchGames() {
      setState((prevState) => ({ ...prevState, isLoading: true }));

      if (!state.oriImages.length) {
        const response = await fetch(
          `${API_URL}/api/image/${gameId}/getImages`,
          {
            method: 'GET',
          },
        );

        if (response.ok) {
          const newOriImages = await response.json();

          if (
            JSON.stringify(newOriImages) !== JSON.stringify(state.oriImages)
          ) {
            setState((prevState) => ({
              ...prevState,
              oriImages: newOriImages,
            }));
          }
        } else {
          console.error('API 호출 실패:', response.status);
        }
      }
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }

    fetchGames();
  }, []);

  // 이미지 섞기 및 미리 보여줄 이미지 대기
  useEffect(() => {
    if (!state.images.length && state.oriImages.length) {
      const getPreloadImages = async () => {
        const shuffledImages = await shuffleImgs(state.oriImages);
        const preloadImages = await shuffledImages.slice(0, 8); // 최소 8장 대기(4강 기준)

        setState((prevState) => ({
          ...prevState,
          images: [...preloadImages],
        }));
      };

      // oriImages에 데이터가 있을 때만 함수를 실행
      if (state.oriImages && state.oriImages.length > 0) {
        getPreloadImages();
      }
    }
  }, [state.oriImages]);

  useEffect(() => {}, [state.images]);

  useEffect(() => {
    if (state.isGameEnd) {
      updateResult({ images: state.oriImages });
    }
  }, [state.isGameEnd]);

  const handleCloseModal = () => {
    setState((prevState) => ({ ...prevState, isModalOpen: false }));
  };

  const handleSelectRound = (round: any) => {
    setState((prevState) => ({ ...prevState, totalRound: round }));
    handleCloseModal();
    addImagesBasedOnRound(round);
    setInitialImages();
  };

  // 초기 이미지 설정 : 현재 보여줄 이미지 2장, 다음에 보여줄 이미지 2장
  const setInitialImages = () => {
    setState((prevState) => ({
      ...prevState,
      currentImages: state.images.slice(0, 2),
    }));
    setState((prevState) => ({
      ...prevState,
      nextImages: state.images.slice(2, 4),
    }));
  };

  // 라운드 따른 이미지 추가(8 + (라운드 * 2 - 8))
  const addImagesBasedOnRound = (round: number) => {
    const { oriImages, images } = state;

    const newImages = oriImages.filter((img) => !images.includes(img));
    const shuffledImages = shuffleImgs(newImages);
    const addImages = shuffledImages.slice(0, round * 2 - 8);

    setState((prevState) => ({
      ...prevState,
      images: [...images, ...addImages],
    }));
  };

  /**
   * 이미지 클릭 함수
   * @param clickedImage 클릭 이미지
   */
  const imageClick = async (clickedImage: Image) => {
    // update win count
    const updateImages: any = [...state.oriImages];
    updateImages.find((o: Image) => o.id === clickedImage.id).winCount += 1;

    setState((prevState) => ({ ...prevState, oriImages: updateImages }));

    // before final round
    if (state.images.length > 2) {
      if (state.totalRound > state.round) {
        setState((prevState) => {
          // 먼저 새로운 round 값을 계산합니다.
          const newRound = prevState.round + 1;

          return {
            ...prevState,
            selectedImage: [...prevState.selectedImage, clickedImage],
            currentImages: [...prevState.nextImages],
            nextImages: [
              ...prevState.images.slice(2 * newRound, 2 * newRound + 2),
            ],
            round: newRound, // 이전에 계산한 newRound 값을 사용합니다.
          };
        });
      } else if (state.totalRound === state.round) {
        const newSelectedImage = [...state.selectedImage, clickedImage];

        const shuffledImages = await shuffleImgs(newSelectedImage);

        setState((prevState) => ({
          ...prevState,
          selectedImage: [],
          images: shuffledImages,
          round: 1,
          totalRound: prevState.totalRound / 2,
        }));

        await setInitialImages();
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        isGameEnd: true,
        finalImage: clickedImage,
      }));
    }
  };

  /**
   * 토너먼트 결과 업데이트
   * @param payload
   */
  const updateResult = async (payload: any) => {
    const body = payload.images;

    const response = await fetch(
      `${API_URL}/api/image/${gameId}/updateResult`,
      {
        method: 'POST',
        body: body,
      },
    );

    if (response.ok) {
      const newOriImages = await response.json();
      if (JSON.stringify(newOriImages) !== JSON.stringify(state.oriImages)) {
        setState((prevState) => ({
          ...prevState,
          oriImages: newOriImages,
        }));
      }
    } else {
      console.error('API 호출 실패:', response.status);
    }
  };

  const copyLink = () => {
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href; // 현재 URL 가져오기
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('주소가 클립보드에 복사되었습니다!');
  };

  const restartGame = () => {
    setState((prevState) => ({
      ...prevState,
      isGameEnd: false,
      images: [],
      selectedImage: [],
      finalImage: undefined,
    }));
  };

  return (
    <div>
      {!state.isLoading && state.isModalOpen && (
        <div className="flex items-center justify-center">
          <SelectCountModal
            isOpen={state.isModalOpen}
            onClose={handleCloseModal}
            onSelectRound={handleSelectRound}
            title={''}
          />
        </div>
      )}
      {!state.isModalOpen && !state.isGameEnd && (
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="bg-white w-full h-1/12 p-4 flex items-center justify-center">
              <h1 className="text-black text-center text-2xl font-bold">
                {state.totalRound === 1
                  ? '월드컵 결승전'
                  : state.totalRound === 2
                  ? '월드컵 준결승전'
                  : `월드컵 ${state.totalRound}강 (${state.round}/${state.totalRound})`}
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              {state.currentImages.map((o) => {
                return (
                  <div className="mb-4 sm:mb-0 sm:mr-4 relative" key={o.id}>
                    {o.id}
                    <Image
                      key={o.id}
                      src={o.imgUrl}
                      width={1200}
                      height={1200}
                      quality={60}
                      alt={`image-${o.id}}`}
                      priority={true}
                      placeholder="empty"
                      loading="eager"
                      onClick={() => {
                        imageClick(o);
                      }}
                    />
                    <span className="absolute left-1/2 bottom-3 transform translate-x-[-50%] text-black font-semibold text-2xl text-shadow">
                      {o.imgName}
                    </span>{' '}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {state.isGameEnd && (
        <div className="container mx-auto max-w-screen-xl">
          <Header />
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div className="flex pl-5 pr-5 justify-center flex-wrap sm:w-full">
                <div className="bg-white w-full h-1/12 p-4 flex items-center justify-center">
                  <h1 className="text-black text-center text-2xl font-bold">
                    {`월드컵 ☆${state.totalRound}강☆ 우승`}
                  </h1>
                </div>
                <div className="mb-4 sm:mb-0 sm:mr-4 relative">
                  {state.finalImage && (
                    <Image
                      key={state.finalImage.id}
                      src={state.finalImage.imgUrl}
                      width={1200}
                      height={1200}
                      quality={60}
                      alt={`image-1`}
                      priority={true}
                    />
                  )}
                  <span className="absolute left-1/2 bottom-3 transform translate-x-[-50%] text-black font-semibold text-2xl text-shadow">
                    {state.finalImage?.imgName}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full">
                <div className="flex">
                  <div className="my-1 mr-1 w-20">
                    <Button
                      onClick={() => restartGame()}
                      label="다시하기"
                      outline
                      small
                    />
                  </div>
                  <div className="m-1 w-20">
                    <Button
                      onClick={() => {}}
                      // onClick={() => navigateTo('/ranking')}
                      label="랭킹보기"
                      outline
                      small
                    />
                  </div>
                  <div className="m-1 w-36">
                    <Link href="/">
                      <Button
                        onClick={() => {}}
                        label="다른 월드컵 보기"
                        outline
                        small
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full flex">
                  <Button
                    onClick={() => copyLink()}
                    label="공유하기(주소 복사)"
                    outline
                    small
                  />
                  <div className="w-full">
                    <Input
                      defaultValue={currentPath}
                      placeholder="주소 복사"
                      disabled={true}
                      className="border p-2 rounded-md h-6 text-xs w-80"
                    />
                  </div>
                </div>
                <div className="w-full mt-2 p-1 border rounded-md">
                  <Comment id={gameId} iId={state.finalImage?.id} />
                </div>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      )}
    </div>
  );
}
