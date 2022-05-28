import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  font-family: "Pretendard", -apple-system, "Apple SD Gothic Neo", sans-serif;
  margin: 0;
  padding: 0; 
  background: linear-gradient(
    106.37deg,
    #c8d6df 29.63%,
    #d2e6ec 51.55%,
    #eee7f7 90.85%
  );
}

/* ::-webkit-scrollbar {
display: none;
} */
`;

export default GlobalStyle;
