import * as Styled from './styles'
import taskManager from 'core/taskManager'
import { SystemTrayPopup } from 'components/SystemTrayPopup'

export function SystemTray() {
  return (
    <div style={{ display: 'flex' }}>
      <Styled.ShapeContainer>
        <Styled.TrayIcon src='assets/taskbar/Shape.svg' />
      </Styled.ShapeContainer>
      <Styled.Container onClick={() => taskManager.addSystemApp(new SystemTrayPopup())} >
        <Styled.TrayIcon src='assets/taskbar/WiFi.svg' />
        <Styled.TrayIcon src='assets/taskbar/Speaker.svg' />
        <Styled.TrayIcon src='assets/taskbar/Battery.svg' />
      </Styled.Container>
    </div>
  )
}