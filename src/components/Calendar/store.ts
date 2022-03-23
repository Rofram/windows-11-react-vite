import { makeAutoObservable } from "mobx";

class CalendarStore {
  now = new Date()

  constructor() {
    makeAutoObservable(this)
  }

  lastDayOfMonth() {
    const lastDay = new Date(this.now.getFullYear(), this.now.getMonth() + 1, 0)
    return lastDay.getDate()
  }

  daysOfWeek = [
    "Seg",
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab',
    'Dom'
  ]

  calendarHeaderText = new Intl.DateTimeFormat('pt-br', { month: 'long', weekday: 'long', day: '2-digit' }).format(this.now)
  
  days = Array.from({ length: this.lastDayOfMonth() }, (_, k) => k + 1)

  month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(this.now)

  year = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(this.now) 
}

export default new CalendarStore()