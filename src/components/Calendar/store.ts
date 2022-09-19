import { sub } from "date-fns";
import { makeAutoObservable } from "mobx";

class CalendarStore {
  now = new Date()
  selectedDay = new Date()
  currentMonth = new Date()

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  lastDayOfMonth(date: Date) {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    return lastDay.getDate()
  }

  daysOfWeek = [
    'Dom',
    "Seg",
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab',
  ]

  setMonth(month: number) {
    this.currentMonth = sub(this.currentMonth, { months: month })
    this.days = Array.from({ length: this.lastDayOfMonth(this.currentMonth) }, (_, k) => {
      let date = new Date(this.currentMonth)
      date.setDate(k + 1)
      return date
    })  
  }

  calendarHeaderText = new Intl.DateTimeFormat('pt-br', { month: 'long', weekday: 'long', day: '2-digit' }).format(this.now)
  
  days = Array.from({ length: this.lastDayOfMonth(new Date()) }, (_, k) => {
    let date = new Date()
    date.setDate(k + 1)
    return date
  })

  get month() {
    return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(this.days[0])
  } 

  get year() {
    return new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(this.days[0]) 
  }

  get day() {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(this.now).split('.')[0]
  }

  setSelectedDay(day: Date) {
    this.selectedDay = day
  }
}

export default new CalendarStore()