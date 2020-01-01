import { App, Notification, AppName } from './types'

export const apps: { [key: string]: App } = {
  [AppName.Tinder]: {
    name: AppName.Tinder,
    color: 'rgb(234, 104, 102)',
  },
  [AppName.Reminders]: {
    name: AppName.Reminders,
    color: 'white',
  },
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
  {
    app: AppName.Reminders,
    heading: 'No one will see your piece. Why bother?',
    timestamp: new Date(),
  },
  {
    app: AppName.Tinder,
    heading: 'New Message',
    message:
      "there's a 100% chance that someone out there is better at your art",
    timestamp: new Date(),
  },
]
