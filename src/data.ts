import { App, Notification, AppName } from './types'

export const apps: { [key: string]: App } = {
  [AppName.Info]: {
    name: AppName.Info,
    color: 'rgb(0, 122, 204)',
  },
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
  [AppName.Compass]: {
    name: AppName.Compass,
    color: 'black',
  },
}

export const infoNotification: Notification = {
  id: '0',
  app: AppName.Info,
  heading: "Welcome to Don't Make Art!",
  message:
    "Don't Make Art! is a way of exorcising your demons of creative self-doubt. Tap this message to read more.",
  timestamp: new Date(),
}

export const notifications: Notification[] = [
  {
    id: '1',
    app: AppName.WhatsApp,
    heading: 'Art Professor',
    message: 'This has already been done a bunch of times. Try something new.',
    authorName: 'Jesse',
    authorCity: 'Berlin',
    timestamp: new Date(),
  },
  {
    id: '2',
    app: AppName.Reminders,
    heading: 'Not many people will see your piece.',
    message:
      "It'll be a lot of work for little to no reward. Is it worth the effort?",
    authorName: 'Jesse',
    authorCity: 'Berlin',
    timestamp: new Date(),
  },
  {
    id: '3',
    app: AppName.Tinder,
    heading: 'New Message',
    message:
      "there's a 100% chance that someone out there is better at your art than you are",
    authorName: 'Susi',
    authorCity: 'Berlin',
    timestamp: new Date(),
  },
  {
    id: '4',
    app: AppName.Compass,
    message: 'Is this supposed to be crooked?',
    authorName: 'Susi',
    authorCity: 'Berlin',
    timestamp: new Date(),
  },
  {
    id: '5',
    app: AppName.WhatsApp,
    heading: "I'm-Mean",
    message:
      "Your idea will lose all it's splendor by the time you're even half way through realising it.",
    authorName: 'Amin',
    authorCity: 'Berlin',
    timestamp: new Date(),
  },
  {
    id: '6',
    app: AppName.Reminders,
    message:
      "Shit takes time. You won't even finish one of your top 10 ideas by the end of the year.",
    authorName: 'Amin',
    authorCity: 'Berlin',
    timestamp: new Date(),
  },
]
