import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './themes/global'
import theme from './themes/defaultTheme'
import { Taskbar } from './components/Taskbar'
import { StartMenu } from './components/StartMenu'
import windows11Store from './store'
import { Observer } from 'mobx-react-lite'
import MicrosoftEdge from './components/MicrosoftEdge'
import VsCode from './components/VsCode'
import { SystemTrayPopup } from './components/SystemTrayPopup'

const Screen = styled.div`
  background-image: url('assets/image-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`

function App() {

  return (
    <Observer>
      {() => (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Screen>
            {windows11Store.isStartMenuOpened && <StartMenu />}
            {windows11Store.appsOpened.microsoftEdge && <MicrosoftEdge />}
            {windows11Store.appsOpened.vscode && <VsCode />}
            {windows11Store.isSystemTrayPopupOpened && <SystemTrayPopup />}
            <Taskbar />
          </Screen>
        </ThemeProvider>
      )}
    </Observer>
  )
}

export default App
