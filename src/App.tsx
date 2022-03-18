import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './themes/global'
import theme from './themes/defaultTheme'
import Taskbar from './components/Taskbar'
import { StartMenu } from './components/StartMenu'

const BackGround = styled.div`
  background-image: url('/assets/image-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
`

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BackGround>
        <StartMenu />
        <Taskbar />
      </BackGround>
    </ThemeProvider>
  )
}

export default App
