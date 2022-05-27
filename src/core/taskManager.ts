import { makeAutoObservable, runInAction } from "mobx";
import React, { memo } from "react";
import { WindowApp } from './window';

class TaskbarStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
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

  apps: Map<string, [WindowApp, React.MemoExoticComponent<React.FC>]> = new Map();

  addApp(app: WindowApp) {
    this.apps.set(app.store.uuid, [app, memo(app.render.bind(app))])
    this.setFocus(app.store.uuid)
  }

  removeApp(uuid: string) {
    this.apps.delete(uuid)
  }

  setFocus(uuid: string) {
    Array.from(this.apps.values()).forEach(([app]) => {
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