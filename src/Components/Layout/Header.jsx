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
      <Nav>
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
      </Nav>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 95px;
  cursor: pointer;
  left: 0;
`;

const Nav = styled.div`
  font-size: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  & span {
    cursor: pointer;
    width: 100%;
    text-align: end;
  }
`;

export default Header;
