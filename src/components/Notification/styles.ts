import styled from 'styled-components'

export const Article = styled.article`
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 1rem;
  min-height: 3rem;
  padding: 0.75rem;

  max-width: 100%;
  overflow: hidden;
`

export const AppIconFigure = styled.figure<{ color: string }>`
  background-color: ${props => props.color};

  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  flex-grow: 0;

  margin-right: 0.5rem;
`

export const AppName = styled.div`
  color: rgba(0, 0, 0, 0.75);
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  flex-grow: 1;

  display: flex;
  align-items: center;
`

export const Metadata = styled.footer`
  display: flex;
  align-items: stretch;

  margin-bottom: 0.5rem;
`

export const TimeAndAuthor = styled.div`
  color: rgba(0, 0, 0, 0.75);
  font-weight: 300;
  letter-spacing: 0.5px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  display: flex;
  align-items: center;
`

export const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Message = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.05px;
  line-height: 1.5rem;
`
