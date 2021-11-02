import React from "react";
import styled from "styled-components";
import { BsCamera } from "react-icons/bs";

//edit : 입력하면 수정용으로 바뀝니다.
//saveUrl : 이미지 업로드 후 부모컴포넌트 state에 저장하기 위한 함수입니다. 부모컴포넌트에서 업로드 후 url을 저장할 setState 함수를 넣어주세요!
//imgUrl : 보여줄 이미지 url을 넣어주면 됩니다.
export default function CircleImage({ edit, saveUrl, imgUrl }) {
  const upload = () => {
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

CircleImage.defaultProps = {
  imgUrl:
    "https://images.unsplash.com/photo-1612000529646-f424a2aa1bff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  saveUrl: () => {},
  edit: true
};

const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  cursor: pointer;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;
