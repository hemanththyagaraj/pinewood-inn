import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root { 
  --primary-green: rgb(121, 151, 111);
  --primary-brown: rgb(86, 72, 49);
  --bg-color: rgb(34, 36, 34);
  --secondary-bg-color: rgb(47, 49, 46);
  --primary-text-color: rgb(176, 176, 176); /* Light Grey */
  --secondary-text-color: rgb(255, 255, 255); /* White */
  --success-text-color: rgb(168, 230, 163); /* Light Green */
  --error-text-color: rgb(255, 82, 82);
}

*,
*::before, 
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: background-color 0.3s ease-out;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
  background-color: var(--bg-color);
  color: var(--primary-text-color);
}

ul {
  list-style: none;
}

button, a {
  cursor: pointer;
}

`;

export default GlobalStyles;
