import { Clock } from '../Clock';
import { SystemTray } from '../SystemTray';
import WidgetsButton from '../WidgetsButton';
import TaskBarApps from '../TaskBarApps';
import * as Styled from './styles';

export function Taskbar() {
  return (
    <Styled.Container>
      <WidgetsButton />
      <TaskBarApps />
      <Styled.WindowsOptions>
        <SystemTray />
        <Clock />
      </Styled.WindowsOptions>
    </Styled.Container>
  )
}