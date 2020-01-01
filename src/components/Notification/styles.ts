import styled from 'styled-components'

export const Article = styled.article`
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 1rem;
  min-height: 3rem;
  padding: 0.75rem;
`

export const AppIconFigure = styled.figure<{ color: string }>`
  background-color: ${props => props.color};

  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;

  margin-right: 0.5rem;
`

export const AppName = styled.div`
  color: rgba(0, 0, 0, 0.75);
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  flex-grow: 1;
`

export const Metadata = styled.footer`
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;
`

export const Time = styled.time`
  color: rgba(0, 0, 0, 0.75);
  font-weight: 300;
  letter-spacing: 0.5px;
`

export const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;
`

export const Message = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.05px;
  line-height: 1.5rem;
`
