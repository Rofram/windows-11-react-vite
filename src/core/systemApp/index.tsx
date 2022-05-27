import taskManager from "core/taskManager"
import { makeAutoObservable, runInAction } from "mobx"
import { Observer } from "mobx-react-lite"
import React from "react"
import { Container } from './styles'

class SystemWindowStore {
  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true
    })
  }

  container: HTMLDivElement | null = null
  isClose = false

  setContainerRef(ref: HTMLDivElement | null) {
    this.container = ref
    return ref
  }

  requestToClose() {
    this.isClose = true
    console.log("requestToClose")
  }
}

export class SystemApp {
  store = new SystemWindowStore()
  uuid = window.crypto.randomUUID()

  close() {
    this.store.requestToClose();
    setTimeout(() => {
      runInAction(() => {
        taskManager.removeSystemApp(this.uuid)
      })
    }, 200)
  }

  render(children?: React.ReactNode) {
    // const child = React.Children.map(children!, (element, index) => {
    //   return React.cloneElement(element as React.ReactElement<any>, {
    //     key: index,
    //     requestToClose: this.store.requestToClose.bind(this.store),
    //     ref: this.store.setContainerRef.bind(this.store)
    //   })
    // })

    // const Parent = (p: {children: JSX.Element}) => {
    //   const childRef = useRef()
  
    //   return React.cloneElement(p.children, { ref: childRef })
    // }

    return (
      <Observer>
        {() => (
          <Container
            ref={ref => this.store.setContainerRef(ref)}
            requestToClose={this.store.isClose}
          >
            {children}
          </Container>
        )}
      </Observer>
    )
  }
}