import "../styles/globals.css";
import Header from "../src/Components/Layout/Header";
import Footer from "../src/Components/Layout/Footer";

//전체 레이아웃을 담당하는 컴포넌트입니다.
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
