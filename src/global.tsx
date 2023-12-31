import { createGlobalStyle } from 'styled-components';

import backgroundImage from './assets/backgroundImage.png';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'MaruBuri-Regular', sans-serif;
  }
  
  @font-face {
    font-family: 'MaruBuri-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Se-hwa';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/Se-hwa.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  //
  //@font-face {
  //  font-family: 'MaruBuri-Regular';
  //  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
  //  font-weight: bold;
  //  font-style: normal;
  //}
  

  //@font-face {
  //  font-family: 'Nanum Gothic';  font-style: normal;  font-weight: 400;
  //  font-display: swap;
  //  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff2) format('woff2'),
  //  url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff) format('woff'),
  //  url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf) format('truetype');
  //}

  //@font-face {
  //  font-family: 'Nanum Gothic';
  //  font-style: normal;
  //  font-weight: 700;
  //  font-display: swap;
  //  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff2) format('woff2'),
  //  url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff) format('woff'),
  //  url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.ttf) format('truetype');
  //}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1.5;
    //background-color: #d1f7e4; // 민트
    //background-color: #f5eed3; // 베이지
    background-image: url(${backgroundImage});
    background-repeat: repeat;
    background-size: 35px;
    min-width: 320px;



  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

`;

export default GlobalStyle;