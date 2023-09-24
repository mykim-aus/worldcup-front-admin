'use client';

import Button from './button/Button';
import Input from './input/Input';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { formatDate } from '../../utils/common';
import Toast from './toast/Toast';

export default function Comment(props: any) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;

  const gameId = Number(props.id);

  const [isLoading, setIsLoading] = useState(false);
  let [postName, setPostName] = useState('');
  let [postDetail, setPostDetail] = useState('');
  let [comments, setComments] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    async function fetchComments() {
      setIsLoading(true);

      await getComments();

      setIsLoading(false);
    }

    fetchComments();
  }, []);

  /**
   * 댓글 등록
   */
  const registComments = async () => {
    setIsLoading(true);

    // 등록
    await fetch(`${API_URL}/api/comment/${gameId}/regist`, {
      method: 'POST',
      body: JSON.stringify({
        commentName: postName,
        commentContent: postDetail,
        tId: props.id,
        iId: props.iId,
      }),
    });

    // refresh 댓글 가져오기
    await getComments();

    setIsLoading(false);
  };

  /**
   * 댓글 가져오기
   */
  const getComments = async () => {
    const response = await fetch(
      `${API_URL}/api/comment/${gameId}/getComments`,
      {
        method: 'GET',
      },
    );

    if (response.ok) {
      const newComments = await response.json();

      if (JSON.stringify(comments) !== JSON.stringify(newComments)) {
        setComments(newComments);
      }
    } else {
      console.error('API 호출 실패:', response.status);
    }
  };

  /**
   * 댓글 신고 (토스트 미구현)
   */
  const reportComment = async (id: any) => {
    const requestComment: any = comments.find((item: any) => item.id === id);

    const response = await fetch(
      `${API_URL}/api/comment/${gameId}/reportComment`,
      {
        method: 'POST',
        body: JSON.stringify({
          id: id,
          reported: requestComment.reported,
        }),
      },
    );

    if (response.ok) {
    } else {
      console.error('삭제 실패:');
    }
  };

  /**
   * 댓글 삭제
   * @param id
   */
  const deleteComment = async (id: any) => {
    setIsLoading(true);
    try {
      console.log(id);

      const response = await fetch(
        `${API_URL}/api/comment/${gameId}/deleteComment`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: id,
          }),
        },
      );

      if (response.ok) {
        await getComments();
      } else {
        console.error('삭제 실패:');
      }
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  return (
    <>
      {!isLoading && (
        <div>
          <div>
            <span className="text-xs my-1">닉네임</span>
            <Input
              name="post_name"
              defaultValue="익명"
              placeholder="익명"
              className="border p-2 rounded-md h-6 text-xs w-full"
              onChange={(e) => {
                setPostName(e.target.value);
              }}
            />
            <span className="text-xs my-1">한마디 남기기</span>
            <Input
              name="post_input"
              defaultValue=""
              placeholder="메세지를 입력하세요"
              className="bg-white border rounded-sm block duration-150bg-white border-e5e6e7 w-full text-xs transition-colors duration-150 my-1"
              multiline={true}
              onChange={(e) => {
                setPostDetail(e.target.value);
              }}
            />
            <button
              className="
              bg-blue-500 
              text-white
              relative
              disabled:opacity-70
              disabled:cursor-not-allowed
              rounded-lg
              hover:opacity-80
              transition
              w-full
              mx-0
              px-0"
              onClick={() => {
                registComments();
              }}
            >
              등록
            </button>
          </div>
          <div>
            <span>댓글</span>
          </div>
          <div>
            {comments.length ? (
              comments.map((item: any) => {
                return (
                  <div className="bg-white p-2 mx-1 shadow-md rounded mb-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-xs">
                          {item.commentName}
                        </span>{' '}
                        <span className="text-gray-600 text-xs">
                          {item.image?.imgName
                            ? `- (${item.image.imgName})`
                            : ''}{' '}
                          &nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="text-gray-500 text-xs">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <button
                          className="text-blue-500 text-xs"
                          onClick={() => reportComment(item.id)}
                        >
                          신고
                        </button>
                        {/* {item.isAuthor && ( // 가정: item.isAuthor는 본인인 경우 true, isAdmin은 관리자인 경우 true */}
                        <>
                          <span className="text-xs mx-1 font-thin">|</span>
                          <button
                            className="text-red-500 text-xs"
                            onClick={() => deleteComment(item.id)} // 가정: deleteClick 함수에서 삭제 처리
                          >
                            삭제
                          </button>
                        </>
                        {/* )} */}
                      </div>
                    </div>
                    <div className="mt-0 w-max">
                      <span className="text-xs flex-wrap">
                        {item.commentContent}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <span className="text-xs">
                한마디가 없습니다. 첫 한마디를 남겨주세요!
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
