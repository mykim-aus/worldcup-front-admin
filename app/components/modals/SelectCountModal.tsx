'use client';

import React, { useCallback, useState, useEffect } from 'react';

import Modal from '../modals/Modal';
import Button from '../button/Button';
import Link from 'next/link';

interface SelectCountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRound: (round: number) => void;
  title: string;
}

export default function SelectCountModal({
  isOpen,
  onClose,
  onSelectRound,
  title,
}: SelectCountModalProps) {
  const [imageCount, setImageCount] = useState(0);
  const [tournamentList, setTournamentList] = useState<number[]>([]);

  useEffect(() => {
    if (isOpen) {
      const randomCount = Math.floor(Math.random() * 1) + 64; // 최대 8
      // const randomCount = Math.floor(Math.random() * 1) + 32; // 최대 8
      // const randomCount = Math.floor(Math.random() * 8000) + 1; // 최대 1~8000
      setImageCount(randomCount);

      const list: number[] = [];
      let num = 8;
      while (num <= randomCount) {
        list.push(num / 2);
        num *= 2;
      }

      setTournamentList(list);
    }
  }, [isOpen]);

  const handleSelectRound = (round: number) => {
    onSelectRound(round);
    onClose();
  };

  let bodyContent = null;

  if (tournamentList.length > 0) {
    bodyContent = (
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-lg p-4 w-full">
          <h1 className="text-black text-center text-lg mb-4">음식 월드컵</h1>
          <p className="text-black text-center">라운드를 선택하세요</p>
          <div className="mx-auto justify-start">
            <div className="flex flex-wrap justify-center">
              {tournamentList.map((num) => {
                return (
                  <div key={num} className="m-1 w-14">
                    <Button
                      onClick={() => handleSelectRound(num)}
                      label={`${num}강`}
                      outline
                      small
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-black text-center text-xs mt-2">
            총 {imageCount}명의 후보가 대결을 기다리고 있습니다
          </p>
          <div className="flex justify-end mt-4">
            <Link href={`/ranking`}>
              <div className="text-black text-sm underline cursor-pointer">
                <Button onClick={() => {}} label={`랭킹 보기`} outline small />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {}}
      title={title}
      actionLabel=""
      body={bodyContent}
    />
  );
}
