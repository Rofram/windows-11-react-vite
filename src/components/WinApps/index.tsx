import * as Styled from './styles'
import taskbarStore from '../../store'
import { Observer } from 'mobx-react-lite'

export default function WinApps() {
  return (
    <Observer>
      {() => (
        <Styled.Container>
          <Styled.App src='assets/taskbar/Windows.svg' onClick={() => taskbarStore.setIsStartMenuOpened(!taskbarStore.isStartMenuOpened)} />
          <Styled.App src='assets/taskbar/Search.svg' />
          <Styled.App src='assets/taskbar/DesktopManager.svg' />
          <Styled.App src='assets/taskbar/Chat.svg' />
          <Styled.App src='assets/taskbar/FileExplorer.svg' />
          <Styled.App src='assets/taskbar/MicrosoftEdge.svg' onClick={() => taskbarStore.setAppsOpened({microsoftEdge: !taskbarStore.appsOpened.microsoftEdge})} />
          <Styled.App src='assets/taskbar/vscode.png' onClick={() => taskbarStore.setAppsOpened({vscode: !taskbarStore.appsOpened.vscode})} />
        </Styled.Container>
      )}
    </Observer>
  )
}