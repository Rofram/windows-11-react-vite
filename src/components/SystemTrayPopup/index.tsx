import * as Styled from './styles'
import systemTray from './store'
import { observer } from 'mobx-react-lite'
import taskManager from '../../core/taskManager';
import { useClickAway } from 'hooks/useClickAway';
import { useRef } from 'react';

export const SystemTrayPopup = observer(() => {
  const trayRef = useRef<HTMLDivElement>(null)

  useClickAway(trayRef, taskManager.toggleSystemTrayPopup)

  return (
    <Styled.Container ref={trayRef} requestToClose={taskManager.systemTrayPopup.requestToClose} >
      <Styled.Content>
        <Styled.ButtonContainer>
          {systemTray.buttons.map((button, index) => (
            <Styled.Button key={button.title}>
              <button 
                onClick={() => {
                  systemTray.buttons[index].isActive = !systemTray.buttons[index].isActive
                }}
                className={systemTray.buttons[index].isActive ? 'active' : ''}
              >
                {button.icon}
              </button>
              <span>
                {button.title}
              </span>
            </Styled.Button>
          ))}
        </Styled.ButtonContainer>
        <Styled.RangeContainer>
          <Styled.Range type="range" />
          <Styled.Range type="range" />
        </Styled.RangeContainer>
      </Styled.Content>
      <Styled.Footer>
        <span>92%</span>
      </Styled.Footer>
    </Styled.Container>
  );
})