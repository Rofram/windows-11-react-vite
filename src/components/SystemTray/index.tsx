import * as Styled from './styles'

export function SystemTray() {
  return (
    <Styled.Container>
      <Styled.TrayIcon src='assets/taskbar/Shape.svg' style={{ width: 12, height: 6.5, marginRight: 6 }} />
      <Styled.TrayIcon src='assets/taskbar/WiFi.svg' />
      <Styled.TrayIcon src='assets/taskbar/Speaker.svg' />
      <Styled.TrayIcon src='assets/taskbar/Battery.svg' />
    </Styled.Container>
  )
}