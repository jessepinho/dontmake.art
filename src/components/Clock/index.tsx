import React from 'react'

import * as Styles from './styles'

const Clock: React.FC<{}> = props => (
  <Styles.Section>
    <time>
      <Styles.Time>09:19</Styles.Time>
      <Styles.Date>Wednesday, 1 January</Styles.Date>
    </time>
  </Styles.Section>
)

export default Clock
