import React from 'react'

import './reset.css'

import Clock from '../Clock'
import Notification from '../Notification'
import * as Styles from './styles'

const App: React.FC<{}> = props => (
  <>
    <Styles.BackgroundCSS />
    <Styles.Main>
      <Styles.ClockWrapper>
        <Clock />
      </Styles.ClockWrapper>
      <Styles.NotificationsWrapper>
        <Styles.Notifications>
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </Styles.Notifications>
      </Styles.NotificationsWrapper>
    </Styles.Main>
  </>
)

export default App
