import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700&display=swap');
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, button {
  font-family: 'Lexend', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
