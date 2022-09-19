import { BsX, BsDash } from 'react-icons/bs'
import { BiRectangle } from 'react-icons/bi'

import { WindowStore } from './store'
import * as Styled from './styles'


export class WindowApp {
  store = new WindowStore()

  setMinimizeButton(minimizeButton: boolean) {
    this.store.setMinimizeButton(minimizeButton)
  }

  setMaximizeButton(maximizeButton: boolean) {
    this.store.setMaximizeButton(maximizeButton)
  }

  close = () => {
    this.store.setRequestToClose(true)
    setTimeout(() => {
      this.store.closeApp()
    }, 300)
  }

  render(child?: React.ReactNode) {
    return (
      <Styled.Container
        ref={ref => this.store.setContainerRef(ref)}
        requestToClose={this.store.requestToClose}
        isFocused={this.store.isFocused}
        id={this.store.uuid}
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
              <BsX onClick={this.close} />
            </div>
          </Styled.Header>
        )
      }
        <Styled.Content>
          {child}
        </Styled.Content>
      </Styled.Container>
    )
  }
}
