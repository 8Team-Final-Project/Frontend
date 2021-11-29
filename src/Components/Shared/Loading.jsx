import React from "react";
import styled from "styled-components";
import LogoEffect from "./LogoEffect";

export default function Loading() {
  return (
    <Container>
      <LogoEffect width="90px" height="100px" />
      <MessageBox>
        <Message>로딩중</Message>
      </MessageBox>
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

const MessageBox = styled.div`
  margin-top: 30px;
  color: #3c3c3c;
  margin-bottom: 55px;
  text-align: center;
  font-size: 18px;
`;

const Message = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;
