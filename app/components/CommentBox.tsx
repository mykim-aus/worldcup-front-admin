import React, { useState } from 'react';

interface Comment {
  id: number;
  content: string;
  date: Date;
}

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleInputChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      const newComment = {
        id: Date.now(),
        content: comment,
        date: new Date(),
      };
      setComments((prevComments: Comment) => [...prevComments, newComment]);
      setComment('');
    }
  };

  return (
    <div>
      <h2>댓글창</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="댓글을 입력하세요"
        />
        <button type="submit">댓글 작성</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentBox;
