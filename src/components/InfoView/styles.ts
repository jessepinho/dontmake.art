import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Overlay = styled.div`
  animation: ${fadeIn} 0.15s linear;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);
`

export const NotificationsWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  padding: 0 0.5rem;
  width: 100%;

  display: grid;
  grid-row-gap: 0.5rem;
`

export const Link = styled.a`
  color: inherit;
`
