import React from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

//Img
import refreshIcon from "../src/Asset/icons/refresh_icon.svg";

export default function Error() {
  const router = useRouter();
  return (
    <Container>
      <MessageBox>
        <MainMessage>오류가 발생하였습니다.</MainMessage>
        <SubMessage>다시 접속해주세요!</SubMessage>
      </MessageBox>
      <Icon src={refreshIcon.src} onClick={() => router.push("/")} />
    </Container>
  );
}

// styled-component
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Icon = styled.img`
  width: 60px;
  height: 55px;
  cursor: pointer;
`;

const MessageBox = styled.div`
  color: #3c3c3c;
  margin-bottom: 55px;
  text-align: center;
  font-size: 24px;
`;

const MainMessage = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;
const SubMessage = styled.span``;
