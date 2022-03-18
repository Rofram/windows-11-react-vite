import { Observer } from 'mobx-react-lite'
import * as Styled from './styles'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useRef, useState } from 'react'
import { makeAutoObservable } from 'mobx'

class MicrosoftEdgeStore {
  dragging = false
  mouseOffset = { x: 0, y: 0 }

  constructor() {
    makeAutoObservable(this)
  }

  container: HTMLDivElement | null = null

  setContainerRef = (ref: HTMLDivElement | null) => {
    this.container = ref
  }

  setDragging = (dragging: boolean) => {
    this.dragging = dragging
  }

  onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setDragging(true)
    this.mouseOffset.x = e.clientX
    this.mouseOffset.y = e.clientY
    console.log(e.clientX, e.clientY)
  }

  onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setDragging(false)
  }

  onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (this.dragging) {
      this.container!.style.left = `${e.clientX - this.mouseOffset.x}px`
      this.container!.style.top = `${e.clientY - this.mouseOffset.y}px`
    }
  }

  onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setDragging(false)
  }
}

export function MicrosoftEdge() {
  return (
    <Observer>
      {() => {
        const [store] = useState(new MicrosoftEdgeStore())

        return (
          <Styled.Container ref={ref => store.setContainerRef(ref)}>
            <Styled.Header 
              onMouseDown={store.onMouseDown.bind(store)}
              onMouseUp={store.onMouseUp.bind(store)} 
              onMouseMove={store.onMouseMove.bind(store)} 
              onMouseLeave={store.onMouseLeave.bind(store)}
            >
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