import styled from 'styled-components';

const BannerBlock = styled.div`
  background-color: #2A83FE;
  color: white;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
  }

  p { 
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;

const Banner = () => {
  return (
    <BannerBlock>
      <h1>kusitms</h1>
      <p>파트 크로스 스터디에 오신 걸 환영합니다!</p>
    </BannerBlock>
  );
}

export default Banner;
