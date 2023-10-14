import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import postData from './getPostData';

const StyledButton = styled.button`
  background-color: white;
  border: 1.5px solid rgb(173, 230, 221); 
  padding: 4px 8px;

  &:hover {
    background-color: rgb(173, 230, 221);
  }
`;

const StyledContent = styled.p`
  font-size: 11px;
  margin-bottom: 30px;
`;

const StyledContent1 = styled.p`
  font-size: 10px;
  margin-bottom: 10px;
`;

const App = () => {
  const [liked, setLiked] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    document.title = `like count = ${likeCount}`;
  }, [likeCount]);


  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div id="root">
      <h2>{postData.title}</h2>
      <ul>
        <li><StyledContent>{postData.q1}</StyledContent></li>
        <li><StyledContent>{postData.q2}</StyledContent></li>
        <li><StyledContent>{postData.q3}</StyledContent></li>
        <li><StyledContent>{postData.q4}</StyledContent></li>
        <li><StyledContent>{postData.q5}</StyledContent></li>
        <ol>
          <li><StyledContent1>{postData.q5_1}</StyledContent1></li>
          <li><StyledContent1>{postData.q5_2}</StyledContent1></li>
          <li><StyledContent1>{postData.q5_3}</StyledContent1></li>
          <li><StyledContent1>{postData.q5_4}</StyledContent1></li>
          <li><StyledContent1>{postData.q5_5}</StyledContent1></li>
        </ol>
      </ul>
      <center>
        <StyledButton onClick={handleLikeClick}>
          {liked ? '👍🏾 (1)' : '👍🏾 (0)'}
        </StyledButton>
        <h6>Likes: {likeCount}</h6>
      </center>
    </div>
  );
};

export default App;