import React, { useState } from 'react'

import './reset.css'

import AddButton from '../AddButton'
import Clock from '../Clock'
import InfoView from '../InfoView'
import Notification from '../Notification'
import { notifications, infoNotification } from '../../data'
import * as Styles from './styles'

const App: React.FC<{}> = () => {
  const [isInfoViewVisible, setIsInfoViewVisible] = useState<boolean>(false)
  const showInfoView = () => setIsInfoViewVisible(true)
  const hideInfoView = () => setIsInfoViewVisible(false)

  return (
    <>
      <Styles.BackgroundCSS />
      <Styles.Main>
        <Styles.ClockWrapper>
          <Clock />
        </Styles.ClockWrapper>
        <Styles.NotificationsWrapper>
          <Styles.Notifications>
            <Notification
              notification={infoNotification}
              onClick={showInfoView}
            />
            {notifications.map(notification => (
              <Notification key={notification.id} notification={notification} />
            ))}
          </Styles.Notifications>
        </Styles.NotificationsWrapper>

        {isInfoViewVisible && <InfoView onClick={hideInfoView} />}

        <Styles.AddButtonWrapper>
          <AddButton />
        </Styles.AddButtonWrapper>
      </Styles.Main>
    </>
  )
}

export default App
