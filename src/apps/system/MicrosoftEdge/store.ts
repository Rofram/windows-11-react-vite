import { makeAutoObservable } from 'mobx'

class MicrosoftEdgeStore {
  dragging = false
  mouseOffset = { x: 0, y: 0 }
  containerPosition = { x: 0, y: 0 }
  search = ''
  input: HTMLInputElement | null = null
  container: HTMLDivElement | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setContainerRef(ref: HTMLDivElement | null) {
    this.container = ref
  }

  setInputRef(ref: HTMLInputElement | null) {
    this.input = ref
  }

  setDragging (dragging: boolean) {
    this.dragging = dragging
  }

  onMount() {
    document.addEventListener('keyup', this.onKeyUp)
  }

  onUnmount()  {
    document.removeEventListener('keyup', this.onKeyUp)
  }

  onKeyUp(e: KeyboardEvent)  {
    if (e.key === 'Enter') {
      this.search = this.input!.value
      console.log(this.input!.value)
    }
  }

  onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(true)
    this.mouseOffset.x = e.clientX
    this.mouseOffset.y = e.clientY
    this.containerPosition.x = this.container?.offsetLeft ?? 0
    this.containerPosition.y = this.container?.offsetTop ?? 0
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

export default new MicrosoftEdgeStore()