import { Observer } from 'mobx-react-lite'
import * as Styled from './styles'
import { BsArrowClockwise, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { memo, useEffect, useRef, useState } from 'react'
import microsoftEdgeStore from './store'
import { BsX, BsDash } from 'react-icons/bs'
import { BiRectangle } from 'react-icons/bi'
import windows11Store from '../../store'


function MicrosoftEdge() {
  return (
    <Observer>
      {() => {
        const [store] = useState(microsoftEdgeStore)

        useEffect(() => {
          store.onMount()
          return () => store.onUnmount()
        }, [])

        return (
          <Styled.Container 
            ref={ref => store.setContainerRef(ref)}
            requestToClose={windows11Store.appsOpened.microsoftEdge.requestToClose}
          >
            <Styled.Header 
              onMouseDown={store.onMouseDown.bind(store)}
              onMouseUp={store.onMouseUp.bind(store)} 
              onMouseMove={store.onMouseMove.bind(store)} 
              onMouseLeave={store.onMouseLeave.bind(store)}
            >
              <div>
                <BsArrowLeft />
                <BsArrowRight />
                <BsArrowClockwise />
              </div>
              <input type="text" onChange={e => store.search = e.target.value} ref={ref => store.setInputRef(ref)} />
              <div>
                <BsDash size={20} color="#fff" />
                <BiRectangle size={15} color="#fff" />
                <BsX size={20} color="#fff" onClick={() => windows11Store.toggleAppOpened('microsoftEdge')} />
              </div>
            </Styled.Header>
            <Styled.Media>
              <iframe src={`https://www.bing.com.br/search?q=${store.search}`}></iframe>
            </Styled.Media>
          </Styled.Container>
        )
    }}
    </Observer>
  )
}

export default memo(MicrosoftEdge)