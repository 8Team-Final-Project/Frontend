import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import router from "next/router";

//헤더영역을 이루는 컴포넌트입니다.
const Header = () => {
  const is_login = useSelector((state) => state.user.isLogin);

  return (
    <Wrap>
      <LogoImg
        src="/logo.png"
        onClick={() => {
          router.push("/");
        }}
      />
      <span
        onClick={() => {
          router.push("/event");
        }}
      >
        이벤트
      </span>
      <span
        onClick={() => {
          router.push("/combination");
        }}
      >
        꿀조합
      </span>
      {!is_login && (
        <span
          onClick={() => {
            router.push("/auth/login");
          }}
        >
          로그인
        </span>
      )}
      {is_login && (
        <span
          onClick={() => {
            router.push("/mypage");
          }}
        >
          MY
        </span>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;

  & span {
    margin: 10px;
    margin-top: 15px;
  }
`;

const LogoImg = styled.img`
  margin-right: 72px;
  margin-top: 8px;
  width: 95px;
  height: 33px;
`;

export default Header;
