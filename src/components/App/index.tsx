import React from 'react'

import Clock from '../Clock'
import * as Styles from './styles'

const App: React.FC<{}> = props => (
  <Styles.Main>
    <Clock />
    <Styles.BackgroundCSS />
  </Styles.Main>
)

export default App
