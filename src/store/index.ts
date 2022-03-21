import { makeAutoObservable, runInAction } from 'mobx'
import { TesteApp } from '../apps/vendor/TesteApp'
import { WindowsApp } from '../core/WindowsApp'

type App = {
  icon: string
  alt: string
}

class Windows11Store {
  constructor() {
    makeAutoObservable(this)
  }


  openedApps: WindowsApp[] = []


  user = {
    img: 'https://avatars.githubusercontent.com/u/50988834?v=4',
    name: 'Rodrigo de França'
  }

  appsOpened = {
    vscode: {
      requestToClose: false,
      isOpen: false
    },
    microsoftEdge: {
      requestToClose: false,
      isOpen: false
    },
    fileExplorer: {
      requestToClose: false,
      isOpen: false
    },
    windowsStore: {
      requestToClose: false,
      isOpen: false
    },
    notepad: {
      requestToClose: false,
      isOpen: false
    },
    spotify: {
      requestToClose: false,
      isOpen: false
    },
  }

  toggleAppOpened(app: keyof typeof this.appsOpened) {
    this.openedApps.push(new TesteApp())
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

  toggleAllApps() {
    this.isAllAppsOpened = !this.isAllAppsOpened
  }

  setNewApp(newApp: App) {
    this.apps.push(newApp)
  }

  tabIndex = 0  

  setTabIndex(index: number) {
    this.tabIndex = index
  }

  systemTrayPopup = {
    isOpen: false,
    requestToClose: false
  }

  startMenu = {
    isOpen: false,
    requestToClose: false
  }

  toggleSystemTrayPopup() {
    if (this.systemTrayPopup.isOpen) {
      this.systemTrayPopup.requestToClose = true
      setTimeout(() => {
        runInAction(() => {
          this.systemTrayPopup.isOpen = false
          this.systemTrayPopup.requestToClose = false
        })
      }, 300)

      return;
    }

    this.systemTrayPopup.isOpen = true
  }

  toggleStartMenuOpened() {
    if (this.startMenu.isOpen) {
      this.startMenu.requestToClose = true
      setTimeout(() => {
        runInAction(() => {
          this.startMenu.isOpen = false
          this.startMenu.requestToClose = false
        })
      }, 300)

      return;
    }
    
    this.startMenu.isOpen = true
  }
}

export default new Windows11Store()