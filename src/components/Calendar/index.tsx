import { observer } from 'mobx-react-lite'
import * as Styled from './styles'
import calendarStore from './store'
import { sub, add, isSameDay, addMonths } from 'date-fns'
import { useMemo, useRef } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import taskManager from 'core/taskManager'
import { useClickAway } from 'hooks/useClickAway'

function Calendar() {
  const calendarRef = useRef<HTMLDivElement>(null)

  const CalendarDays = useMemo(() => {
    const currentDate = new Date(calendarStore.currentMonth)
    currentDate.setDate(1)

    let days: Date[] = []

    const temp = currentDate.getDay()
    for (let index = 0; index < temp; index++) {
      days.unshift(sub(currentDate, { days: index + 1 }))
    }

    days.push(...calendarStore.days)
    
    currentDate.setDate(0)
    for (let index = 0; days.length < 42; index++) {
      days.push(add(addMonths(currentDate, 1), { days: index + 1}))
    }

    return days
  }, [calendarStore.days])

  function SwitchDate(direction: any) {
    calendarStore.setMonth(direction)
  }

  useClickAway(calendarRef, taskManager.toggleCalendar)

  return (
        <Styled.Container ref={calendarRef} requestToClose={taskManager.calendar.requestToClose}>
          <Styled.Header>
            <span>{calendarStore.calendarHeaderText}</span>
          </Styled.Header>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <Styled.CalendarTitle>
              <div>
                <span>{calendarStore.month}</span>
                <span>{calendarStore.year}</span>
              </div>
            </Styled.CalendarTitle>
            <div style={{ display: 'flex', gap: 10 }}>
              <Styled.SwitchDate onClick={() => SwitchDate(1)}>
                <TiArrowSortedUp size={20} />
              </Styled.SwitchDate>
              <Styled.SwitchDate onClick={() => SwitchDate(-1)}>
                <TiArrowSortedDown size={20} />
              </Styled.SwitchDate>
            </div>
          </div>
          <Styled.CalendarGrid>
            {calendarStore.daysOfWeek.map((day) => (
              <Styled.DayOfWeek key={day}>
                <span>{day}</span>
              </Styled.DayOfWeek>
            ))}
            
              {CalendarDays.map((day, index) => (
                <Styled.Day
                  key={index} 
                  isToday={isSameDay(day, calendarStore.now)}
                  onClick={() => calendarStore.setSelectedDay(day)}
                  isSelected={isSameDay(day, calendarStore.selectedDay)}
                >
                  <span>{day.getDate()}</span>
                </Styled.Day>
              ))}
          </Styled.CalendarGrid>
        </Styled.Container>
  )
}

export default observer(Calendar)