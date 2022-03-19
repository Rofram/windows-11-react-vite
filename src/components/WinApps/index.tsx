import * as Styled from './styles'
import taskbarStore from '../../store'
import { Observer } from 'mobx-react-lite'

export default function WinApps() {
  return (
    <Observer>
      {() => (
        <Styled.Container>
          <button onClick={() => taskbarStore.setIsStartMenuOpened(!taskbarStore.isStartMenuOpened)}>
            <Styled.App src='assets/taskbar/Windows.svg' />
          </button>
          <button>
            <Styled.App src='assets/taskbar/Search.svg' />
          </button>
          <button>
            <Styled.App src='assets/taskbar/DesktopManager.svg' />
          </button>
          <button>
            <Styled.App src='assets/taskbar/Chat.svg' />
          </button>
          <button>
            <Styled.App src='assets/taskbar/FileExplorer.svg' />
          </button>
          <button onClick={() => taskbarStore.setAppsOpened({microsoftEdge: !taskbarStore.appsOpened.microsoftEdge})}>
            <Styled.App src='assets/taskbar/MicrosoftEdge.svg' />
          </button>
          <button onClick={() => taskbarStore.setAppsOpened({vscode: !taskbarStore.appsOpened.vscode})}>
            <Styled.App src='assets/taskbar/vscode.png' />
          </button>
        </Styled.Container>
      )}
    </Observer>
  )
}