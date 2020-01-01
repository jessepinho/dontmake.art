export interface App {
  name: AppName
  color: string
}

export enum AppName {
  Compass = 'Compass',
  Tinder = 'Tinder',
  Reminders = 'Reminders',
  WhatsApp = 'WhatsApp',
}

interface BaseNotification {
  app: AppName
  timestamp: Date
}

interface NotificationWithHeading extends BaseNotification {
  heading: string
  message?: string
}

interface NotificationWithMessage extends BaseNotification {
  heading?: string
  message: string
}

export type Notification = NotificationWithHeading | NotificationWithMessage
