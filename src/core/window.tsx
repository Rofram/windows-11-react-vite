import { observer } from 'mobx-react-lite'
import * as Styled from './styles'
import { BsArrowClockwise, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useEffect } from 'react'
import microsoftEdgeStore from './store'
import { BsX, BsDash } from 'react-icons/bs'
import { BiRectangle } from 'react-icons/bi'
import windows11Store from '../store'

type WindowProps = {
  children: React.ReactNode
}

function Window({ children }: WindowProps) {
  useEffect(() => {
    microsoftEdgeStore.onMount()
    return () => microsoftEdgeStore.onUnmount()
  }, [])

  return (
    <Styled.Container 
      ref={ref => microsoftEdgeStore.setContainerRef(ref)}
      requestToClose={windows11Store.appsOpened.microsoftEdge.requestToClose}
    >
      <Styled.Header 
        onMouseDown={microsoftEdgeStore.onMouseDown}
        onMouseUp={microsoftEdgeStore.onMouseUp} 
        onMouseMove={microsoftEdgeStore.onMouseMove} 
        onMouseLeave={microsoftEdgeStore.onMouseLeave}
      >
        <div>
          <BsArrowLeft />
          <BsArrowRight />
          <BsArrowClockwise />
        </div>
        <input type="text" ref={ref => microsoftEdgeStore.setInputRef(ref)} />
        <div>
          <BsDash size={20} color="#fff" />
          <BiRectangle size={15} color="#fff" />
          <BsX size={20} color="#fff" onClick={() => windows11Store.toggleAppOpened('microsoftEdge')} />
        </div>
      </Styled.Header>
      <Styled.Media>
        {children}
      </Styled.Media>
    </Styled.Container>
  )
}

export default observer(MicrosoftEdge)