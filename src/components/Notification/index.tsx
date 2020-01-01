import React from 'react'

import * as Styles from './styles'

const Notification: React.FC<{}> = props => (
  <Styles.Article>
    <Styles.Metadata>
      <Styles.AppIconFigure color="rgb(108, 208, 94)" />
      <Styles.AppName>WhatsUp</Styles.AppName>
      <Styles.Time>1m ago</Styles.Time>
    </Styles.Metadata>
    <Styles.Heading>Art Prof</Styles.Heading>
    <Styles.Message>
      This has already been done a bunch of times. Try something new.
    </Styles.Message>
  </Styles.Article>
)

export default Notification
