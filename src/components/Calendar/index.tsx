import { Observer } from 'mobx-react-lite'
import * as Styled from './styles'
import calendarStore from './store'
import { memo } from 'react'

function Calendar() {
  return (
    <Observer>
      {() => (
        <Styled.Container>
          <Styled.Header>
            <span>{calendarStore.calendarHeaderText}</span>
          </Styled.Header>
          <Styled.CalendarTitle>
            <div>
              <span>{calendarStore.month}</span>
              <span>{calendarStore.year}</span>
            </div>
          </Styled.CalendarTitle>
          <Styled.CalendarGrid>
            {calendarStore.daysOfWeek.map((day) => (
              <Styled.DayOfWeek key={day}>
                <span>{day}</span>
              </Styled.DayOfWeek>
            ))}
            {calendarStore.days.map((day) => (
              <Styled.Day key={day} isToday={day == calendarStore.now.getDay()}>
                <span>{day}</span>
              </Styled.Day>
            ))}
          </Styled.CalendarGrid>
        </Styled.Container>
      )}
    </Observer>
  )
}

export default memo(Calendar)