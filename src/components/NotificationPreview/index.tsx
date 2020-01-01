import React from 'react'

import * as Styles from './styles'
import Notification from '../Notification'
import { Notification as NotificationType } from '../../types'

const NotificationPreview: React.FC<{
  notification: NotificationType
  onClick: () => void
}> = ({ notification, onClick }) => (
  <Styles.Overlay onClick={onClick}>
    <Styles.NotificationWrapper>
      <Notification notification={notification} displayAs="preview" />
    </Styles.NotificationWrapper>
  </Styles.Overlay>
)

export default NotificationPreview
