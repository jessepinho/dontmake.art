import styled, { css } from 'styled-components'

export const Form = styled.form<{ isVisible: boolean }>`
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 1rem;
  min-height: 3rem;
  padding: 0.75rem;

  transition: opacity 0.35s;

  ${props =>
    props.isVisible
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`
