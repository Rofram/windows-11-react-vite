import { Observer } from 'mobx-react-lite'
import * as Styled from './styles'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useRef, useState } from 'react'
import { makeAutoObservable } from 'mobx'

class MicrosoftEdgeStore {
  dragging = false

  constructor() {
    makeAutoObservable(this)
  }


}

export function MicrosoftEdge() {
  return (
    <Observer>
      {() => {
        const containerRef = useRef(null)
        const [store] = useState(new MicrosoftEdgeStore())

        return (
          <Styled.Container ref={containerRef}>
            <Styled.Header>
              <div>
                <FiArrowLeft />
                <FiArrowRight />
              </div>
            </Styled.Header>
          </Styled.Container>
        )
    }}
    </Observer>
  )
}