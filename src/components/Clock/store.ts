import { makeAutoObservable } from 'mobx'

class ClockStore {
  constructor() {
    makeAutoObservable(this)
    setInterval(() => this.tick(), 1000)
  }

  time = new Date()

  tick() {
    this.time = new Date()
  }

  get Hours() {
    const [_, hours] = new Intl.DateTimeFormat('pt-br', { dateStyle: 'short', timeStyle: 'medium' }).format(this.time).split(' ')
    return hours
  }

  get Date() {
    const [date] = new Intl.DateTimeFormat('pt-br', { dateStyle: 'short', timeStyle: 'medium' }).format(this.time).split(' ')
    return date
  }
}

export default new ClockStore()