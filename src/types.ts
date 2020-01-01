import React from 'react'

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
}

interface NotificationWithHeading extends BaseNotification {
  heading: string
  message?: string
  children?: React.ReactNode
}

interface NotificationWithMessage extends BaseNotification {
  heading?: string
  message: string
  children?: React.ReactNode
}

interface NotificationWithChildren extends BaseNotification {
  heading?: string
  message?: string
  children: React.ReactNode
}

export type Notification =
  | NotificationWithHeading
  | NotificationWithMessage
  | NotificationWithChildren
