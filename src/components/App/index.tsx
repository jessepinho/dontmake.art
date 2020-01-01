import React, { useState } from 'react'

import './reset.css'

import Clock from '../Clock'
import Notification from '../Notification'
import NotificationPreview from '../NotificationPreview'
import { notifications } from '../../data'
import { Notification as NotificationType } from '../../types'
import * as Styles from './styles'

const App: React.FC<{}> = () => {
  const [
    notificationPreview,
    setNotificationPreview,
  ] = useState<NotificationType | null>(null)

  const onClickNotification = (notification: NotificationType) => {
    if (notification.previewText) {
      setNotificationPreview(notification)
    }
  }

  const onClickNotificationPreview = () => setNotificationPreview(null)

  return (
    <>
      <Styles.BackgroundCSS />
      <Styles.Main>
        <Styles.ClockWrapper>
          <Clock />
        </Styles.ClockWrapper>
        <Styles.NotificationsWrapper>
          <Styles.Notifications>
            {notifications.map(notification => (
              <Notification
                key={notification.id}
                notification={notification}
                onClick={onClickNotification}
              />
            ))}
          </Styles.Notifications>
        </Styles.NotificationsWrapper>

        {notificationPreview && (
          <NotificationPreview
            notification={notificationPreview}
            onClick={onClickNotificationPreview}
          />
        )}
      </Styles.Main>
    </>
  )
}

export default App
