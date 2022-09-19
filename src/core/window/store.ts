import { makeAutoObservable } from 'mobx'
import taskManager  from '../taskManager'

export class WindowStore {
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
  requestToClose = false

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true
    })
  }

  closeApp() {
    taskManager.removeApp(this.uuid)
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

  setRequestToClose(requestToClose: boolean) {
    this.requestToClose = requestToClose
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
    if (!this.container) return;
    if (this.dragging) {
      this.container.style.left = `${(e.clientX + this.containerPosition.x) - this.mouseOffset.x}px`
      this.container.style.top = `${(e.clientY + this.containerPosition.y) - this.mouseOffset.y}px`
    }
  }

  onMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(false)
  }
}