import { Observer } from 'mobx-react-lite'
import * as Styled from './styles'
import clockStore from './store'

export function Clock() {
  return (
    <Observer>
      {() => {
        const [date, hours] = clockStore.getHours()

        return (
          <Styled.Container>
            <Styled.Text>{hours}</Styled.Text>
            <Styled.Text>{date}</Styled.Text>
          </Styled.Container>
        )
      }}
    </Observer>
  )
}