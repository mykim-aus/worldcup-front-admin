'use client';

import Button from './button/Button';
import Input from './input/Input';
import { useEffect, useState } from 'react';

export default function Comment(props: any) {
  useEffect(() => {
    fetch('/api/post/list?t_id=' + props.tId)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  let [postName, setPostName] = useState('');
  let [postDetail, setPostDetail] = useState('');
  let [data, setData] = useState([]);

  return (
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
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          w-full
          mx-1
          px-2"
          onClick={() => {
            fetch('/api/post/regist', {
              method: 'POST',
              body: JSON.stringify({
                post_name: postName,
                post_detail: postDetail,
                t_id: props.tId,
                i_id: props.iId,
              }),
            });
          }}
        >
          등록
        </button>
      </div>
      <div>
        <div>댓글목록</div>
        {data.length ? (
          data.map((item: any) => {
            return (
              <div className="bg-white p-4 my-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">
                    {item.post_name} - ({item.i_id})
                  </span>
                  <button className="text-xs text-red-500 hover:underline">
                    신고
                  </button>
                </div>
                <div className="mt-2">{item.post_detail}</div>
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
  );
}
