import { makeAutoObservable } from "mobx";


class SystemStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  apps = new Map()

  addApp(app: App) {
    this.apps.set(app.name, app)
  }
}