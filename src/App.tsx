import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './themes/global'
import theme from './themes/defaultTheme'
import { Taskbar } from './components/Taskbar'
import { StartMenu } from './components/StartMenu'
import windows11Store from './store'
import { Observer } from 'mobx-react-lite'
import {WindowsApp} from './core/WindowsApp'
import VsCode from './components/VsCode'
import { SystemTrayPopup } from './components/SystemTrayPopup'
import { Calendar } from './apps/system/Calendar'
import React, { useState } from 'react'
import { TesteApp } from './apps/vendor/TesteApp'

const Screen = styled.div`
  background-image: url('assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`

function App() {

  const [app] = useState<WindowsApp>(new TesteApp())

  return (
    <Observer>
      {() => (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Screen>
            {windows11Store.openedApps.map((app, index) => <React.Fragment key={String(index)}>{app.render()}</React.Fragment>)}

            {windows11Store.startMenu.isOpen && <StartMenu />}
            {windows11Store.systemTrayPopup.isOpen && <SystemTrayPopup />}
            {/* <Calendar /> */}
            <Taskbar />
          </Screen>
        </ThemeProvider>
      )}
    </Observer>
  )
}

export default App
