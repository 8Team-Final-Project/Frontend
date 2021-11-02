import { wrapper } from "../src/Redux/configureStore";
import styled from "styled-components";

import GlobalThemeProvider from "../styles/GlobalThemeProvider";

//components
import Header from "../src/Components/Layout/Header";
import Footer from "../src/Components/Layout/Footer";

//전체 레이아웃을 담당하는 컴포넌트입니다.
function MyApp({ Component, pageProps }) {
  return (
    <GlobalThemeProvider>
      <Wrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
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
