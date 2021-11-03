import React,{useState,useEffect} from 'react'
import { wrapper } from "../src/Redux/configureStore";
import { useDispatch } from "react-redux";
import { LoginCheck } from "../src/Redux/Async/userAsync"

import styled from "styled-components";

import GlobalThemeProvider from "../styles/GlobalThemeProvider";

//components
import Header from "../src/Components/Layout/Header";

//전체 레이아웃을 담당하는 컴포넌트입니다.
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  // next js 토큰 확인
  const [isToken,setIsToken] = useState(typeof window !=='undefined'? localStorage.getItem('token'):null)
  
  // const isLogin = useSelector((state) => state.changeLoginStatus.isLogin);
	// console.log('isLogin', isLogin)

  useEffect(() => {
    if(isToken) {
      dispatch(LoginCheck());
    }
  },[isToken]);

  return (
    <GlobalThemeProvider>
      <Wrapper>
        <Header />
        <Component {...pageProps} />
      </Wrapper>
    </GlobalThemeProvider>
  );
}

const Wrapper = styled.div`
  //App의 너비입니다.
  width: 360px;
`;

// withRedux 함수로 컴포넌트를 감싸준다.
export default wrapper.withRedux(MyApp);
