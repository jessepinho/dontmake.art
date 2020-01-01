import React from 'react'

import { apps } from '../../data'
import { Notification as NotificationType } from '../../types'
import * as Styles from './styles'

const Notification: React.FC<{ notification: NotificationType }> = ({
  notification,
}) => (
  <Styles.Article>
    <Styles.Metadata>
      <Styles.AppIconFigure color={apps[notification.app].color} />
      <Styles.AppName>{apps[notification.app].name}</Styles.AppName>
      <Styles.TimeAndAuthor>
        <time>1m ago</time> &bull; {notification.authorName} in{' '}
        {notification.authorCity}
      </Styles.TimeAndAuthor>
    </Styles.Metadata>

    {notification.heading && (
      <Styles.Heading>{notification.heading}</Styles.Heading>
    )}

    {notification.message && (
      <Styles.Message>{notification.message}</Styles.Message>
    )}
  </Styles.Article>
)

export default Notification
