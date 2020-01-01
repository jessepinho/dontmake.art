export interface App {
  name: AppName
  color: string
}

export enum AppName {
  Compass = 'Compass',
  Info = 'Info',
  Tinder = 'Tinder',
  Reminders = 'Reminders',
  WhatsApp = 'WhatsApp',
}

interface BaseNotification {
  id: string
  app: AppName
  timestamp: Date
  authorName?: string
  authorCity?: string
  previewText?: string
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
