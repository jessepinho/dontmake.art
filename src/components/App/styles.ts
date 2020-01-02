import styled, { createGlobalStyle } from 'styled-components'

import { ZIndexes } from '../../constants'

import background from './background.jpg'

export const Main = styled.main`
  background-color: rgb(159, 159, 159);
  background-image: url('${background}');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (min-width: 600px) {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;

    max-width: 600px;

    box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  }
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
    /* https://css-tricks.com/snippets/css/system-font-stack/ */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    overflow: hidden;
  }
`

export const AddButtonWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  z-index: ${ZIndexes.AddButton};
`
