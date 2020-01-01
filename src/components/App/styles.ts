import styled, { createGlobalStyle } from 'styled-components'

import background from './background.jpg'

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const ClockWrapper = styled.div`
  padding: 3rem 0 2rem;
  flex-grow: 0;
`

export const NotificationsWrapper = styled.div`
  flex-grow: 1;

  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

export const Notifications = styled.section`
  padding: 0 0.5rem 0.5rem;

  display: grid;
  grid-row-gap: 0.5rem;
`

export const BackgroundCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: rgb(159, 159, 159);
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: cover;

    /* https://css-tricks.com/snippets/css/system-font-stack/ */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    overflow: hidden;
  }
`
