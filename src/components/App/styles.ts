import styled, { createGlobalStyle } from 'styled-components'

import background from './background.jpg'

export const Main = styled.main``

export const BackgroundCSS = createGlobalStyle`
  body {
    background-color: rgb(159, 159, 159);
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: cover;

    /* https://css-tricks.com/snippets/css/system-font-stack/ */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`
