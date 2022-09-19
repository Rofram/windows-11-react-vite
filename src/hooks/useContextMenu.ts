import { makeAutoObservable } from 'mobx'

type Position = {
  x: number
  y: number
} | null

type Items = Array<{
  title: string
  icon: string
  onClick?: () => void
}> | null

class ContextMenuStore {
  items: Items = null;
  position: Position = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get isOpen() {
    return !!this.position
  }

  setPosition(pos: Position) {
    this.position = pos
  }

  setItems(items: Items) {
    this.items = items 
  }
}

export const contextMenuStore = new ContextMenuStore()

export const useContextMenu = (items: Items) => {
  function listener(event: any) {
    event.preventDefault()
    contextMenuStore.setItems(items)
    contextMenuStore.setPosition({x: event.clientX, y: event.clientY });
  }

  return listener;
}