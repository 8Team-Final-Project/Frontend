import React from "react";
import styled from "styled-components";
import { BsCamera } from "react-icons/bs";

//edit : 입력하면 수정용으로 바뀝니다.
//saveUrl : 이미지 업로드 후 부모컴포넌트 state에 저장하기 위한 함수입니다. 부모컴포넌트에서 업로드 후 url을 저장할 setState 함수를 넣어주세요!
//imgUrl : 보여줄 이미지 url을 넣어주면 됩니다.
export default function RectangleImage({ edit, saveUrl, imgUrl }) {
  const upload = () => {
    //서버에 이미지 업로드하여 imgUrl을 받아오고, 그 값을 부모컴포넌트에 전달하는 함수입니다.
    const url = "";
    saveUrl(url);
  };

  if (edit)
    return (
      <ImageWrapper onClick={upload}>
        <Image src={imgUrl} />
        <BsCamera />
      </ImageWrapper>
    );

  return <Image src={imgUrl} />;
}

RectangleImage.defaultProps = {
  imgUrl:
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
  saveUrl: () => {},
  edit: false
};

const Image = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;
  border-radius: 12px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 225px;
  cursor: pointer;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
  }
`;
