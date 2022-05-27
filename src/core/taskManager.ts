import { makeAutoObservable, runInAction } from "mobx";
import React, { memo } from "react";
import { SystemApp } from "./systemApp";
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
  systemApps: Array<[SystemApp, React.MemoExoticComponent<React.FC>]> = []

  addApp(app: WindowApp) {
    this.apps.set(app.store.uuid, [app, memo(app.render.bind(app))])
  }

  removeApp(uuid: string) {
    this.apps.delete(uuid)
  }

  addSystemApp(app: any) {
    const openedSystemApp = this.systemApps.length && this.systemApps[0].length && this.systemApps[0]?.[0];
    if (openedSystemApp) {
      if (openedSystemApp instanceof app.constructor) {
        openedSystemApp.close();
        return;
      }
  
      openedSystemApp.close();
    }

    this.systemApps.push([app, memo(app.render.bind(app))])
  }

  removeSystemApp(uuid: string) {
    this.systemApps = this.systemApps.filter(([systemApp]) => systemApp.uuid !== uuid)
  }

  setFocus(uuid: string) {
    Array.from(this.apps.values()).forEach(app => {
      app[0].store.setIsFocused(app[0].store.uuid === uuid)
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