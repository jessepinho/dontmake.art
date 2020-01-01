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

  display: flex;
  align-items: center;
  justify-content: stretch;
`

export const NotificationWrapper = styled.div`
  padding: 0 0.5rem;
  width: 100%;
`
