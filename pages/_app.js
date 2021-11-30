import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import GlobalThemeProvider from "../styles/GlobalThemeProvider";

//function
import { Me } from "../src/Redux/Async/userAsync";
import { wrapper } from "../src/Redux/configureStore";

//components
import Header from "../src/Components/Layout/Header";
import FloatingButton from "../src/Components/Button/FloatingButton";

//Google Analytics
import * as gtag from "../src/Shared/gtag";

//전체 레이아웃을 담당하는 컴포넌트입니다.
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const router = useRouter();

  // 구글 애널리틱스
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // next js 토큰 확인
  const [locationX, setLocationX] = useState(null);
  const container = useRef(null);
  const isToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (isToken) {
      dispatch(Me());
    }
  }, [isToken]);

  // 모바일 확인
  useEffect(() => {
    function isMobile() {
      const user = navigator.userAgent;
      let is_mobile = false;
      if (
        user.indexOf("iPhone") > -1 ||
        user.indexOf("Android") > -1 ||
        user.indexOf("iPad") > -1 ||
        user.indexOf("iPod") > -1
      ) {
        is_mobile = true;
      }
      return is_mobile;
    }

    //모바일과 웹 넓이 구분
    if (!isMobile()) setLocationX(container.current.offsetParent.offsetWidth - container.current.offsetLeft);
    if (isMobile()) setLocationX(container.current.offsetWidth);

    // 설명필요함
    window.addEventListener("resize", () => {
      setLocationX(container.current.offsetParent.offsetWidth - container.current.offsetLeft);
    });
    return window.removeEventListener("resize", () => {});
  }, []);

  //플로팅 버튼 router 처리
  const floatButton = () => {
    if (router.pathname === "/event") return router.push("/event/write");
    if (router.pathname === "/combination") return router.push("/combination/write");
  };

  return (
    <GlobalThemeProvider>
      <Wrapper ref={container}>
        <HeaderWrap>
          <Header />
        </HeaderWrap>
        <Component {...pageProps} />
        {router.pathname === "/event" || router.pathname === "/combination" ? (
          <FloatingButton onClick={floatButton} locationX={locationX} />
        ) : null}
      </Wrapper>
    </GlobalThemeProvider>
  );
}

// styled-component
const Wrapper = styled.div`
  max-width: 500px;
  width: 100vw;
  box-sizing: border-box;
  background: #ffffff;
`;

const HeaderWrap = styled.div`
  padding: 5% 7%;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 5;
  border-bottom: 1px solid #e8e8e8;
`;

// withRedux 함수로 컴포넌트를 감싸준다.
export default wrapper.withRedux(MyApp);
