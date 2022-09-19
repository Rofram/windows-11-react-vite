import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './themes/global'
import theme from './themes/defaultTheme'
import { Taskbar } from './components/Taskbar'
import { StartMenu } from './components/StartMenu'
import { observer } from 'mobx-react-lite'
import { SystemTrayPopup } from './components/SystemTrayPopup'
import Calendar from './components/Calendar'
import taskManager from './core/taskManager'
import { ContextMenu } from 'components/ContextMenu'
import { WidgetsApp } from 'components/WidgetsApp'
import Module from '../bin/paint/hello3.js'

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

setTimeout(async () => {
  console.log(await Module())
}, 500)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Screen id="screen">
        {Array.from(taskManager.apps.values()).map(([app, AppObserved]) => <AppObserved key={app.store.uuid} />)}

        <ContextMenu />

        {taskManager.startMenu.isOpen && <StartMenu />}
        {taskManager.systemTrayPopup.isOpen && <SystemTrayPopup />}
        {taskManager.calendar.isOpen && <Calendar />}
        <WidgetsApp />
        <Taskbar />
      </Screen>
    </ThemeProvider>
  )
}

export default observer(App)
