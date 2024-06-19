import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root { 
    --primary-green: #79976f;
  --primary-brown: #564831;
  --background-color: #1e2621;
  --primary-text-color: #ffffff; /* White */
  --secondary-text-color: #b0b0b0; /* Light Grey */
  --success-text-color: #a8e6a3; /* Light Green */
  --error-text-color: #ff5252;
}

*,
*::before, 
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
  background-color: var(--background-color);
}

ul {
  list-style: none;
}

button, a {
  cursor: pointer;
}

`;

export default GlobalStyles;
