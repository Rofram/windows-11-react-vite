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

  getHours() {
    const [date, hours] = new Intl.DateTimeFormat('pt-br', { dateStyle: 'short', timeStyle: 'medium' }).format(this.time).split(' ')
    return [date, hours]
  }
}

export default new ClockStore()