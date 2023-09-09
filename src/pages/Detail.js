import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
  const [data, setData] = useState({});

  let { articleId } = useParams();

  const fetchData = async () => {
    await axios
      .get(`https://kusitms.shop/api/v1/articles/${articleId}`)
      .then((res) => {
        console.log(res);
        setData({ ...res.data.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    articleId && fetchData();
  }, []);

  return (
    <>
      <Header onClick={() => console.log(data.tagList)}>
        <HeaderWrapper>
          <HeaderTitle>{data?.title}</HeaderTitle>
          <HeaderInfoWrapper>
            <ProfileWrapper>
              <Profile src={require('../assets/kusitm.svg').default} />
            </ProfileWrapper>
            <InfoWrapper>
              <Title>{data?.articleId}</Title>
              <Time>{data?.createdAt}</Time>
            </InfoWrapper>
            <Btn>
              <BtnImg src={require('../assets/edit.png')} />
              <BtnTxt>글 수정</BtnTxt>
            </Btn>
            <Btn>
              <BtnImg src={require('../assets/trash.png')} />
              <BtnTxt>글 지우기</BtnTxt>
            </Btn>
          </HeaderInfoWrapper>
        </HeaderWrapper>
      </Header>
      <Contents>{data?.body}</Contents>
      <TagWrapper>
        {data?.tagList?.map((el) => (
          <Tag key={el}>{el}</Tag>
        ))}
      </TagWrapper>
    </>
  );
};

export default Detail;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a83fe;
  margin-bottom: 25px;
  padding: 20px 0px;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const HeaderTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 15px;
`;

const HeaderInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: aliceblue;
  overflow: hidden;
`;

const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 8px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 12px;
`;

const Time = styled.div`
  color: #ddd;
  font-size: 10px;
`;

const Btn = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
`;

const BtnImg = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

const BtnTxt = styled.div`
  color: #fff;
  font-size: 10px;
`;

const Contents = styled.div`
  margin: auto;
  width: calc(90% - 20px);
  min-height: 80px;
  border: 2px solid #2a83fe;
  border-radius: 10px;
  padding: 15px 10px;
  color: #000;
  font-size: 15px;
  margin-bottom: 25px;
  resize: none;
  outline: none;
`;

const TagWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #999;
  color: white;
  border-radius: 20px;
  padding: 8px 12px;
  text-align: center;
`;
