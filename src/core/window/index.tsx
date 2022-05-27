import { Observer } from 'mobx-react-lite'
import { makeAutoObservable, runInAction } from 'mobx'
import * as Styled from './styles'
import { BsX, BsDash } from 'react-icons/bs'
import { BiRectangle } from 'react-icons/bi'
import taskManager  from '../taskManager'


class WindowStore {
  dragging = false
  mouseOffset = { x: 0, y: 0 }
  containerPosition = { x: 0, y: 0 }
  container: HTMLDivElement | null = null
  isFocused = false
  isMaximized = false
  isMinimized = false
  uuid = window.crypto.randomUUID()

  titleBar = true
  minimizeButton = true
  maximizeButton = true
  isClose = false

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true
    })
  }

  requestToClose() {
    this.isClose = true
  }

  setIsFocused(isFocused: boolean) {
    this.isFocused = isFocused
  }

  setIsMaximized(isMaximized: boolean) {
    this.isMaximized = isMaximized
  }

  setIsMinimized(isMinimized: boolean) {
    this.isMinimized = isMinimized
  }

  setMaximizeButton(maximizeButton: boolean) {
    this.maximizeButton = maximizeButton
  }

  setMinimizeButton(minimizeButton: boolean) {
    this.minimizeButton = minimizeButton
  }

  setContainerRef(ref: HTMLDivElement | null) {
    this.container = ref
  }

  setDragging(dragging: boolean) {
    this.dragging = dragging
  }

  onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(true)
    this.mouseOffset.x = e.clientX
    this.mouseOffset.y = e.clientY
    this.containerPosition.x = this.container?.offsetLeft ?? 0
    this.containerPosition.y = this.container?.offsetTop ?? 0

    taskManager.setFocus(this.uuid)
  }

  onMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(false)
  }

  onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (this.dragging) {
      this.container!.style.left = `${(e.clientX + this.containerPosition.x) - this.mouseOffset.x}px`
      this.container!.style.top = `${(e.clientY + this.containerPosition.y) - this.mouseOffset.y}px`
    }
  }

  onMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(false)
  }
}

export class WindowApp {
  store = new WindowStore()

  setMinimizeButton(minimizeButton: boolean) {
    this.store.setMinimizeButton(minimizeButton)
  }

  setMaximizeButton(maximizeButton: boolean) {
    this.store.setMaximizeButton(maximizeButton)
  }

  close() {
    this.store.requestToClose()
    setTimeout(() => {
      runInAction(() => {
        taskManager.removeApp(this.store.uuid)
      })
    }, 300)
  }

  render(child?: React.ReactNode) {
    return (
      <Observer>
      {() => (
        <Styled.Container
          ref={ref => this.store.setContainerRef(ref)}
          requestToClose={this.store.isClose}
          isFocused={this.store.isFocused}
        >
          {this.store.titleBar && (
            <Styled.Header
              onMouseDown={this.store.onMouseDown}
              onMouseUp={this.store.onMouseUp}
              onMouseMove={this.store.onMouseMove}
              onMouseLeave={this.store.onMouseLeave}
            >
              <div>
                {this.store.minimizeButton && <BsDash />}
                {this.store.maximizeButton && <BiRectangle />}
                <BsX onClick={this.close.bind(this)} />
              </div>
            </Styled.Header>
          )
        }
          <Styled.Content>
            {child}
          </Styled.Content>
        </Styled.Container>
      )}
      </Observer>
    )
  }
}
