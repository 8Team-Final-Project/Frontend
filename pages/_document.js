//_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../src/Shared/gtag";

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
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          {/* 네이버  */}
          <meta name="naver-site-verification" content="2065f954cd85cd82fd176fe2f128779664829f79" />
          <meta name="description" content="세상의 모든 음식 조합들을 만나보세요!" />
          <meta name="keywords" content="꿀조합" />
          <title>세상의 모든 음식 조합 - 꿀조합</title>
          <link rel="manifest" href="/manifest.json" />

          {/* Open Graph */}
          <meta property="og:url" content="https://www.kkuljohab.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="꿀조합" />
          <meta property="og:description" content="세상의 모든 음식 조합들을 만나보세요!" />
          <meta property="og:image" content="../src/Asset/Images/ogImage.png" />

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          {/* 네이버 애널리틱스 */}
          <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
          <script type="text/javascript"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if(!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "10c464510b6ffb0";
              if(window.wcs) {
                wcs_do();
              }
          `
            }}
          />
          <meta name="naver-site-verification" content="8a0f2d2bf1a2fb152d6d2124b8bb0ac1fc43eca6" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
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
