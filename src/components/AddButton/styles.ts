import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  height: 3.5rem;
  width: 3.5rem;

  appearance: none;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.15);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Cpath fill='%23fff' d='M21.63 0h6.75v50h-6.75z'/%3E%3Cpath fill='%23fff' d='M0 21.63h50v6.75H0z'/%3E%3C/svg%3E");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 40%;

  border: none;
  border-radius: 50%;
`
