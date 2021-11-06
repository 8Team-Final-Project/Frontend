import React from "react";
import styled from "styled-components";
import PostSaveBtn from "../src/Components/Mypage/PostSaveBtn";
import CircleImage from "../src/Components/Shared/CircleImage";
import Modal from "../src/Components/Shared/Modal";

import { useSelector } from "react-redux";

//마이페이지 첫 렌더링시 메이블린 api 가져와서 list에 저장하기
const mypage = (props) => {
  const userProfile = useSelector((state) => state?.user);

  return (
    <Container>
      <CircleImage />
      <div>
        <h1>{userProfile && userProfile.userNickname}</h1>
        <P>{userProfile && userProfile.userEmail}</P>
      </div>
      <PostSaveBtn />
      <Modal />
    </Container>
  );
};

const P = styled.p`
  color: #b8b8b8;
`;

const Container = styled.div`
  text-align: center;
`;

export default mypage;
