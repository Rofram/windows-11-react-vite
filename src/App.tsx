import { useState } from 'react'
import styled from 'styled-components'
import WindowsBkg from './assets/image-1.png'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './themes/global'
import theme from './themes/defaultTheme'
import Taskbar from './components/Taskbar'

const BackGround = styled.div`
  background-image: url(${WindowsBkg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BackGround>
        <Taskbar />
      </BackGround>
    </ThemeProvider>
  )
}

export default App
