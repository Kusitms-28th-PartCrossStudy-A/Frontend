import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';

const PostListBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
`;

const PostCategories = styled.div`
  display: flex;
  border-bottom: 1px solid #C5C5C5;
`;

const PostCategoryItem = styled.div`
  color: #2A83FF;
  font-weight: 700;
  padding: 0.5rem;
  border-bottom: 2px solid #2A83FF;
`;

const PostMainList = styled.div``;

const PostItemBlock = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  & + & {
    border-top: 0.5px solid #C5C5C5;
  }
`;

const PostItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 16px;
    width: 40px;
    height: 40px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    color: #2A83FF;
    font-size: 1rem;
    border: 1px solid #2A83FF;
    border-radius: 4px;
    outline: none;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  .released-date {
    color: #C5C5C5;
    margin-top: 0.25rem;
  }
`;

const PostContent = styled.div`
  h2 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const MoreText = styled(Link)`
  color: #C5C5C5;
  text-decoration: none;
`;

const PostItem = () => {
  return (
    <PostItemBlock>
      <PostItemTop>
        <img src={require('../../assets/logo/kusitm.svg').default} alt="avatar" />
        <User>
          <span className="username">익명</span>
          <span className="released-date">2023. 9. 9. 오전 6:16:33</span>
        </User>
        <button><AiFillHeart /></button>
      </PostItemTop>
      <PostContent>
        <h2>짱이다</h2>
        <p>멋있어요</p>
      </PostContent>
      <MoreText to="/more">더 보기</MoreText>
    </PostItemBlock>
  );
}

const PostList = () => {
  return (
    <PostListBlock>
      <PostCategories>
        <PostCategoryItem>전체 보기</PostCategoryItem>
      </PostCategories>
      <PostMainList>
        <PostItem />
        <PostItem />
        <PostItem />
      </PostMainList>
    </PostListBlock>
  )
}

export default PostList;
