import React from 'react'

import { apps } from '../../data'
import { Notification as NotificationType } from '../../types'
import * as Styles from './styles'

const Notification: React.FC<{
  notification: NotificationType
  onClick?: () => void
}> = ({ notification, onClick }) => (
  <Styles.Article onClick={onClick}>
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

    {notification.heading && (
      <Styles.Heading>{notification.heading}</Styles.Heading>
    )}

    {notification.message && (
      <Styles.Message>{notification.message}</Styles.Message>
    )}

    {notification.children && (
      <Styles.Message>{notification.children}</Styles.Message>
    )}
  </Styles.Article>
)

export default Notification
