import { makeAutoObservable } from 'mobx'

type App = {
  icon: string
  alt: string
}

type AppsOpened = {
  [key: string]: boolean 
}

class Windows11Store {
  constructor() {
    makeAutoObservable(this)
  }

  user = {
    img: 'https://avatars.githubusercontent.com/u/50988834?v=4',
    name: 'Rodrigo de França'
  }

  appsOpened: AppsOpened = {
    vscode: false,
    microsoftEdge: false,
    fileExplorer: false,
    windowsStore: false,
    notepad: false,
    spotify: false,
  }

  setAppsOpened(appsOpened: AppsOpened) {
    this.appsOpened = { ...this.appsOpened, ...appsOpened }
  }

  apps: App[] = [
    {
      icon: 'assets/apps/microsoftEdge.svg',
      alt: 'Edge'
    },
    {
      icon: 'assets/apps/world.svg',
      alt: 'World'
    },
    {
      icon: 'assets/apps/powerpoint.svg',
      alt: 'PowerPoint'
    },
    {
      icon: 'assets/apps/oneNote.svg',
      alt: 'OneNote'
    },
    {
      icon: 'assets/apps/mail.svg',
      alt: 'Mail'
    },
    {
      icon: 'assets/apps/todo.svg',
      alt: 'To Do'
    },
    {
      icon: 'assets/apps/windowsStore.svg',
      alt: 'Microsoft Store'
    },
    {
      icon: 'assets/apps/photos.svg',
      alt: 'Photos'
    },
    {
      icon: 'assets/apps/yourPhone.svg',
      alt: 'Your Phone'
    },
    {
      icon: 'assets/apps/snippingTool.svg',
      alt: 'Snipping Tool'
    },
    {
      icon: 'assets/apps/notepad.svg',
      alt: 'Notepad'
    },
    {
      icon: 'assets/apps/xbox.svg',
      alt: 'Xbox'
    },
    {
      icon: 'assets/apps/twitter.svg',
      alt: 'Twitter'
    },
    {
      icon: 'assets/apps/config.svg',
      alt: 'Settings'
    },
    {
      icon: 'assets/apps/microsoftNews.svg',
      alt: 'News'
    },
    {
      icon: 'assets/apps/spotify.svg',
      alt: 'Spotify'
    },
    {
      icon: 'assets/apps/calculadora.svg',
      alt: 'Calculator'
    },
    {
      icon: 'assets/apps/paint.svg',
      alt: 'Paint'
    }
  ]

  recommendedApps = [
    {
      icon: 'assets/icons/getStarted.png',
      title: 'Get Started',
      description: 'Welcome to Windows'
    },
    {
      icon: 'assets/icons/pdfIcon.png',
      title: 'Rental Agreement',
      description: '17m ago'
    },
    {
      icon: 'assets/icons/wordIcon.png',
      title: 'Syllabus',
      description: '2h ago'
    },
    {
      icon: 'assets/icons/pdfIcon.png',
      title: 'Logo Ideas',
      description: '12h ago'
    },
    {
      icon: 'assets/icons/ppIcon.png',
      title: 'Tournament Photos',
      description: 'Yesterday at 4:20 PM'
    },
    {
      icon: 'assets/icons/exelIcon.png',
      title: 'Timetable',
      description: 'Yesterday at 1:15 PM'
    }
  ]

  isAllAppsOpened = false
  isSystemTrayPopupOpened = false

  toggleSystemTrayPopup() {
    this.isSystemTrayPopupOpened = !this.isSystemTrayPopupOpened
  }

  toggleAllApps() {
    this.isAllAppsOpened = !this.isAllAppsOpened
  }

  setNewApp(newApp: App) {
    this.apps.push(newApp)
  }

  TabIndex = 0  

  setTabIndex(index: number) {
    this.TabIndex = index
  }

  isStartMenuOpened = false

  

  setIsStartMenuOpened(isStartMenuOpened: boolean) {
    this.isStartMenuOpened = isStartMenuOpened
  }
}

export default new Windows11Store()