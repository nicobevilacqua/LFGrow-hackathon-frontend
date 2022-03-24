import React from 'react';

type Props = {
  streamId: string;
  created: Date;
  content: string;
  likes: number;
  user: string;
};

const Comment: React.FC<Props> = () => {
  return <div>comment</div>;
};

export default Comment;
