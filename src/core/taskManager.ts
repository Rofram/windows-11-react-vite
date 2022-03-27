import { autorun, makeAutoObservable, runInAction } from "mobx";
import { WindowApp } from './window';

class TaskbarStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    // autorun(() => {
    //   document.addEventListener('mouseclick', this.onMouseClick)
    // })
  }

  // TODO: refatorar isso aqui
  startMenu = {
    isOpen: false,
    requestToClose: false
  }

  systemTrayPopup = {
    isOpen: false,
    requestToClose: false
  }

  calendar = {
    isOpen: false,
    requestToClose: false
  }

  

  apps: Map<string, WindowApp> = new Map();

  addApp(app: WindowApp) {
    this.apps.set(app.store.uuid, app)
  }

  removeApp(uuid: string) {
    this.apps.delete(uuid)
  }

  setFocus(uuid: string) {
    Array.from(this.apps.values()).forEach(app => {
      app.store.setIsFocused(app.store.uuid === uuid)
    })
  }

  toggleCalendar() {
    if (this.calendar.isOpen) {
      this.calendar.requestToClose = true
      setTimeout(() => {
        runInAction(() => {
          this.calendar.isOpen = false
          this.calendar.requestToClose = false
        })
      }, 300)

      return;
    }

    this.calendar.isOpen = true
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
}

export default new TaskbarStore()