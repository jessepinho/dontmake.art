import { App, Notification, AppName } from './types'

export const apps: { [key: string]: App } = {
  [AppName.WhatsApp]: {
    name: AppName.WhatsApp,
    color: 'rgb(108, 208, 94)',
  },
}

export const notifications: Notification[] = [
  {
    app: AppName.WhatsApp,
    heading: 'Art Professor',
    message: 'This has already been done a bunch of times. Try something new.',
    timestamp: new Date(),
  },
]
