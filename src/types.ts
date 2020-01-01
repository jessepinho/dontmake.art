export interface App {
  name: AppName
  color: string
}

export enum AppName {
  WhatsApp = 'WhatsApp',
  Reminders = 'Reminders',
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
