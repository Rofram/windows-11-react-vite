import * as Styled from './styles'
import taskbarStore from '../../store'

export function SystemTray() {
  return (
    <div style={{ display: 'flex' }}>
      <Styled.ShapeContainer>
        <Styled.TrayIcon src='assets/taskbar/Shape.svg' />
      </Styled.ShapeContainer>
      <Styled.Container onClick={() =>taskbarStore.toggleSystemTrayPopup()} >
        <Styled.TrayIcon src='assets/taskbar/WiFi.svg' />
        <Styled.TrayIcon src='assets/taskbar/Speaker.svg' />
        <Styled.TrayIcon src='assets/taskbar/Battery.svg' />
      </Styled.Container>
    </div>
  )
}