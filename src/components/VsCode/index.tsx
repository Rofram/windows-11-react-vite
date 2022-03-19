import { Observer } from 'mobx-react-lite'
import { memo, useState } from 'react'
import vsCodeStore from './store'
import windows11Store from '../../store'
import * as Styled from './styles'
import { BsX, BsDash } from 'react-icons/bs'
import { BiRectangle } from 'react-icons/bi'

function VsCode() {
  const [store] = useState(vsCodeStore)

  return (
    <Observer>
      {() => (
        <Styled.Container ref={ref => store.setContainerRef(ref)}>
          <Styled.Header 
            onMouseDown={store.onMouseDown.bind(store)}
            onMouseUp={store.onMouseUp.bind(store)} 
            onMouseMove={store.onMouseMove.bind(store)} 
            onMouseLeave={store.onMouseLeave.bind(store)}
          >
            <div>
              <Styled.HeaderIcon src='assets/taskbar/vscode.png' />
              <Styled.HeaderText>VS Code</Styled.HeaderText>
            </div>
            <div>
              <BsDash size={20} color="#fff" />
              <BiRectangle size={15} color="#fff" />
              <BsX size={20} color="#fff" onClick={() => windows11Store.setAppsOpened({ vscode: false })} />
            </div>
          </Styled.Header>
          <Styled.Media>
            <iframe src='https://www.vscode.dev'></iframe>
          </Styled.Media>
        </Styled.Container>
      )}
    </Observer>
  )
}

export default memo(VsCode)