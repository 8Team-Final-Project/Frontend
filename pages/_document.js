import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

//next.js에서 제공하는 document를 수정할 수 있다. html이나 head, body를 수정해야될 때는 이 파일을 필수적으로 작성해야함!
//document는 서버에서만 렌더링되고, onClick같은 이벤트 핸들러는 작용하지 않는다.
//head에 대한 내용은 _document.js가 아닌 각 컴포넌트에서 작성해야된다.
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>{/* 나중에 웹 폰트 넣을 자리임! */}</Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
