import React from 'react'

import { AppName } from '../../types'
import Notification from '../Notification'
import * as Styles from './styles'

const Credits = () => (
  <>
    Created by{' '}
    <Styles.Link
      href="https://twitter.com/jessepinho"
      target="_blank"
      rel="noopener nofollow"
    >
      @jessepinho
    </Styles.Link>
    . View on{' '}
    <Styles.Link
      href="https://github.com/jessepinho/dontmake.art"
      target="_blank"
      rel="noopener nofollow"
    >
      GitHub
    </Styles.Link>
    .
  </>
)

const InfoView: React.FC<{
  onClick: () => void
}> = ({ onClick }) => (
  <>
    <Styles.Overlay onClick={onClick} />
    <Styles.NotificationsWrapper>
      <Notification
        notification={{
          id: 'info',
          app: AppName.Info,
          heading: "What is Don't Make Art!?",
          message:
            "Sometimes it can help to look our negative self-talk in the face, so that we can see just how harsh we're being with ourselves. Don't Make Art! portrays our negative self-talk as iPhone notifications, as though our friends are sending us discouraging texts with reasons not to make art. Would we accept that from our friends? No! So why do we accept it from ourselves? 🤔",
          timestamp: new Date(),
        }}
      />

      <Notification
        notification={{
          id: 'info',
          app: AppName.Info,
          children: <Credits />,
          timestamp: new Date(),
        }}
      />
    </Styles.NotificationsWrapper>
  </>
)

export default InfoView
