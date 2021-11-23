import { createGlobalStyle } from "styled-components";
import webImg from "../src/Asset/Images/backImg.svg"
export const GlobalStyles = createGlobalStyle`
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);


  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, pre, address,
  del, dfn, em, img, strong, b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, figcaption, figure,
  footer, header, hgroup, menu, nav, section, audio, video {
      margin:0;
      padding:0;
      border:0;
      outline:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
  }
  :after,
  :before {
    content: "";
    display: block;
    clear: both;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  table {
    border-collapse:collapse;
    border-spacing:0;
  }
  button {
    outline: none;
    border: none;
    background: none;
    cursor:pointer;
  }
  input{
      outline: none;
  }
  a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    text-decoration: none;
  }
  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
      display:block;
  }
  nav ul,
  ul,
  li{
      list-style:none;
  }

  html, body {
    font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
    width: 100%;
  }

  body {
    width: 100%;
    background : #fff;
    display: flex;
    justify-content: center;
  }

`;
