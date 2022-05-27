import * as Styled from './styles'
import { Observer } from 'mobx-react-lite'
import taskManager from '../../core/taskManager'
import { MicrosoftEdge } from '../../apps/system/MicrosoftEdge'
import { VsCode } from '../../apps/vendor/VsCode'
import { StartMenu } from 'components/StartMenu'

export default function TaskBarApps() {
  return (
    <Observer>
      {() => (
        <Styled.Container>
          <button onClick={() => taskManager.addSystemApp(new StartMenu())}>
            <Styled.App src='assets/taskbar/Windows.svg' />
          </button>
          <button onClick={() => {}}>
            <Styled.App src='assets/taskbar/Search.svg' />
          </button>
          <button onClick={() => {}}>
            <Styled.App src='assets/taskbar/DesktopManager.svg' />
          </button>
          <button onClick={() => {}}>
            <Styled.App src='assets/taskbar/Chat.svg' />
          </button>
          <button onClick={() => {}}>
            <Styled.App src='assets/taskbar/FileExplorer.svg' />
          </button>
          <button onClick={() => taskManager.addApp(new MicrosoftEdge())}>
            <Styled.App src='assets/taskbar/MicrosoftEdge.svg' />
          </button>
          <button onClick={() => taskManager.addApp(new VsCode())}>
            <Styled.App src='assets/taskbar/vscode.png' />
          </button>
        </Styled.Container>
      )}
    </Observer>
  )
}