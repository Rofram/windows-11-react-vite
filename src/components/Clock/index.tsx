import { observer } from 'mobx-react-lite'
import * as Styled from './styles'
import clockStore from './store'
import taskManager from 'core/taskManager'

export const Clock = observer(() => {

  return (
    <Styled.Container id="calendarButton" onClick={() => taskManager.toggleCalendar()}>
      <Styled.Text>{clockStore.Hours}</Styled.Text>
      <Styled.Text>{clockStore.Date}</Styled.Text>
    </Styled.Container>
  )
})
