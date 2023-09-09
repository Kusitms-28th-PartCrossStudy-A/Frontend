import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: '',
    subTitle: '',
    body: '',
  });

  const [tagList, setTagList] = useState({
    tag_1: '',
    tag_2: '',
    tag_3: '',
  });

  const fetchData = async () => {
    await axios
      .post('https://kusitms.shop/api/v1/articles', {
        title: article.title,
        description: article.subTitle,
        body: article.body,
        tagList: [tagList.tag_1, tagList.tag_2, tagList.tag_3],
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const tags = [tagList.tag_1, tagList.tag_2, tagList.tag_3];
    const { result } = await api.post({
      title: article.title,
      description: article.subTitle,
      body: article.body,
      tagList: tags,
    });
    console.log(result); */
    fetchData();
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleTagChange = (e) => {
    const { name, value } = e.target;
    setTagList({ ...tagList, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleInput
        type="text"
        placeholder="제목을 입력하세요"
        name="title"
        value={article.title}
        onChange={handleChange}
      />
      <SubTitleInput
        type="text"
        placeholder="부제목을 입력하세요"
        name="subTitle"
        value={article.subTitle}
        onChange={handleChange}
      />
      <BodyInput
        className="form-control"
        rows={15}
        placeholder="내용을 입력하세요"
        name="body"
        value={article.body}
        onChange={handleChange}
      />
      <TagInputContainer>
        <TagInput
          type="text"
          name="tag_1"
          value={tagList.tag_1}
          onChange={handleTagChange}
        />
        <TagInput
          type="text"
          name="tag_2"
          value={tagList.tag_2}
          onChange={handleTagChange}
        />
        <TagInput
          type="text"
          name="tag_3"
          value={tagList.tag_3}
          onChange={handleTagChange}
        />
      </TagInputContainer>
      <Button>
        <button className="btn">글 저장</button>
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px 50px;
  flex-direction: column;
  justify-content: space-between;
  height: 570px;
`;

const TitleInput = styled.input`
  border: 1px solid #d9d9d9;
  height: 50px;
  border-radius: 5px;
  padding: 0px 15px;
  font-size: 20px;
  &:focus {
    border-color: #69a8ff;
  }
`;

const SubTitleInput = styled.input`
  border: 1px solid #d9d9d9;
  height: 40px;
  padding: 0px 15px;
  border-radius: 5px;
  font-size: 17px;
  &:focus {
    border-color: #69a8ff;
  }
`;

const BodyInput = styled.textarea`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 15px;
  font-size: 17px;
  resize: none;
  &:focus {
    border-color: #69a8ff;
  }
`;

const TagInputContainer = styled.div`
  display: flex;
`;

const TagInput = styled.input`
  flex-grow: 1;
  border: 1px solid #d9d9d9;
  height: 38px;
  padding: 0px 15px;
  border-radius: 5px;
  font-size: 15px;
  &:focus {
    border-color: #69a8ff;
  }
`;

const Button = styled.div`
  .btn {
    background-color: #69a8ff;
    width: 130px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: white;
    float: right;
    &:hover {
      background-color: #2a83fe;
    }
  }
`;

export default Create;
