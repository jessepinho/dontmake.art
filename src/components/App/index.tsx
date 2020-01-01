import React from 'react'

import './reset.css'

import Clock from '../Clock'
import Notification from '../Notification'
import { notifications } from '../../data'
import SEO from '../seo'
import * as Styles from './styles'

const App: React.FC<{}> = props => (
  <>
    <SEO title="Don't make art!" />
    <Styles.BackgroundCSS />
    <Styles.Main>
      <Styles.ClockWrapper>
        <Clock />
      </Styles.ClockWrapper>
      <Styles.NotificationsWrapper>
        <Styles.Notifications>
          {notifications.map(notification => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </Styles.Notifications>
      </Styles.NotificationsWrapper>
    </Styles.Main>
  </>
)

export default App
