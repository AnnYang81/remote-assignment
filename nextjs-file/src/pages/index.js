import React, { useState, useEffect } from 'react';
import postData from './getPostData';

const IndexPage = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center">{postData.title}</h2>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={handleLikeClick}
          className={`border border-teal-300 py-1 px-2 ${liked ? 'bg-teal-300' : 'bg-white'
            } hover:bg-teal-300 hover:border-teal-300`}
        >
          {liked ? '👍🏾 (1)' : '👍🏾 (0)'}
        </button>
      </div>
    </div>
  );
};
export default IndexPage;