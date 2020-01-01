import React from 'react'

import { apps } from '../../data'
import { Notification as NotificationType } from '../../types'
import * as Styles from './styles'

const Notification: React.FC<{
  notification: NotificationType
  displayAs?: 'notification' | 'preview'
  onClick?: (notification: NotificationType) => void
}> = ({ notification, displayAs = 'notification', onClick }) => (
  <Styles.Article onClick={() => onClick(notification)}>
    <Styles.Metadata>
      <Styles.AppIconFigure color={apps[notification.app].color} />
      <Styles.AppName>{apps[notification.app].name}</Styles.AppName>
      <Styles.TimeAndAuthor>
        1m ago
        {notification.authorName && notification.authorCity && (
          <>
            {' '}
            &bull; {notification.authorName} in {notification.authorCity}
          </>
        )}
      </Styles.TimeAndAuthor>
    </Styles.Metadata>

    {displayAs === 'notification' && notification.heading && (
      <Styles.Heading>{notification.heading}</Styles.Heading>
    )}

    {displayAs === 'notification' && notification.message && (
      <Styles.Message>{notification.message}</Styles.Message>
    )}

    {displayAs === 'preview' && notification.previewText && (
      <Styles.Message>{notification.previewText}</Styles.Message>
    )}
  </Styles.Article>
)

export default Notification
