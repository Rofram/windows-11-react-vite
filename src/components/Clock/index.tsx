import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'
import * as Styled from './styles'

class ClockStore {
  constructor() {
    makeAutoObservable(this)
    setInterval(() => this.updateTime(), 1000)
  }

  time = new Date()

  updateTime() {
    this.time = new Date()
  }

  getHours() {
    const [date, hours] = new Intl.DateTimeFormat('pt-br', { dateStyle: 'short', timeStyle: 'medium' }).format(this.time).split(' ')
    return [date, hours]
  }
}

const clockStore = new ClockStore()

export default observer(function() {
  const [date, hours] = clockStore.getHours()

  return (
    <Styled.Container>
      <Styled.Text>{hours}</Styled.Text>
      <Styled.Text>{date}</Styled.Text>
    </Styled.Container>
  )
}
)