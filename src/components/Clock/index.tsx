import { observer } from 'mobx-react-lite'
import * as Styled from './styles'
import clockStore from './store'
import taskManager from 'core/taskManager'

export const Clock = observer(() => {
  const [date, hours] = clockStore.getHours()

  return (
    <Styled.Container id="calendarButton" onClick={() => taskManager.toggleCalendar()}>
      <Styled.Text>{hours}</Styled.Text>
      <Styled.Text>{date}</Styled.Text>
    </Styled.Container>
  )
})
