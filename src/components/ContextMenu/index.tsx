import { contextMenuStore } from "hooks/useContextMenu"
import { observer } from "mobx-react-lite"
import { useEffect, useRef } from "react"
import * as S from './styles'

export const ContextMenu = observer(() => {
  const contextMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function listener(e: any) {
      const isContextClicked = e.path.some((e: any) => e === contextMenuRef.current)

      if (!isContextClicked)
        contextMenuStore.setPosition(null)
    }

    window.addEventListener('click', listener)

    return () => {
      window.removeEventListener('click', listener)
    }
  }, [contextMenuStore.isOpen])

  if(!contextMenuStore.isOpen)
    return null

  return (
    <S.Container ref={contextMenuRef} x={contextMenuStore.position!.x} y={contextMenuStore.position!.y}>
      {contextMenuStore.items?.map((item, index) => {
        return (
          <S.Item>
            <img src={item.icon} alt={`item_${index}`} />
            <span>{item.title}</span>
          </S.Item>
        )
      })}
    </S.Container>
  )
})