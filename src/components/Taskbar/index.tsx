import { Clock } from '../Clock';
import { SystemTray } from '../SystemTray';
import WidgetsButton from '../WidgetsButton';
import WinApps from '../WinApps';
import * as Styled from './styles';

export function Taskbar() {
  return (
    <Styled.Container>
      <WidgetsButton />
      <WinApps />
      <Styled.WindowsOptions>
        <SystemTray />
        <Clock />
      </Styled.WindowsOptions>
    </Styled.Container>
  )
}