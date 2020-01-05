import React, { useState } from 'react'

import './reset.css'

import AddButton from '../AddButton'
import AddForm from '../AddForm'
import Clock from '../Clock'
import InfoView from '../InfoView'
import Notification from '../Notification'
import { notifications, infoNotification } from '../../data'
import * as Styles from './styles'

const App: React.FC<{}> = () => {
  const [isInfoViewVisible, setIsInfoViewVisible] = useState<boolean>(false)
  const showInfoView = () => setIsInfoViewVisible(true)
  const hideInfoView = () => setIsInfoViewVisible(false)

  const [isAddFormVisible, setIsAddFormVisible] = useState<boolean>(false)
  const showAddForm = () => setIsAddFormVisible(true)
  const hideAddForm = () => setIsAddFormVisible(false)

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

        <AddForm />
      </Styles.Main>
    </>
  )
}

export default App
