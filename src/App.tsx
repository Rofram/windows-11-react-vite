import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './themes/global'
import theme from './themes/defaultTheme'
import { Taskbar } from './components/Taskbar'
import { StartMenu } from './components/StartMenu'
import { observer } from 'mobx-react-lite'
import { SystemTrayPopup } from './components/SystemTrayPopup'
import Calendar from './components/Calendar'
import React, { useState } from 'react'
import taskManager from './core/taskManager'

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

  const [tasks] = useState(taskManager)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Screen>
        {Array.from(tasks.apps.values()).map((app) => <React.Fragment key={app.store.uuid}>{app.render()}</React.Fragment>)}

        {tasks.startMenu.isOpen && <StartMenu />}
        {tasks.systemTrayPopup.isOpen && <SystemTrayPopup />}
        <Calendar />
        <Taskbar />
      </Screen>
    </ThemeProvider>
  )
}

export default observer(App)
