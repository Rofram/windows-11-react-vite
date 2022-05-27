import * as Styled from './styles'
import systemTray from './store'
import { Observer } from 'mobx-react-lite'
import { SystemApp } from '../../core/systemApp';

export class SystemTrayPopup extends SystemApp {

  render() {
    return super.render(
      <Observer>
          {() => (
              <>
                <Styled.Content>
                  <Styled.ButtonContainer>
                    {systemTray.buttons.map((button, index) => (
                      <Styled.Button key={button.title}>
                        <button 
                          onClick={() => {
                            systemTray.toggleButton(button.title)
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
              </>
            )}
        </Observer>
    )
  }
}


// export function SystemTrayPopup() {
//   return (
//     <Observer>
//       {() => (
//         <Styled.Container requestToClose={taskManager.systemTrayPopup.requestToClose} >
//           <Styled.Content>
//             <Styled.ButtonContainer>
//               {systemTray.buttons.map((button, index) => (
//                 <Styled.Button key={button.title}>
//                   <button 
//                     onClick={() => {
//                       systemTray.toggleButton(button.title)
//                     }}
//                     className={systemTray.buttons[index].isActive ? 'active' : ''}
//                   >
//                     {button.icon}
//                   </button>
//                   <span>
//                     {button.title}
//                   </span>
//                 </Styled.Button>
//               ))}
//             </Styled.ButtonContainer>
//             <Styled.RangeContainer>
//               <Styled.Range type="range" />
//               <Styled.Range type="range" />
//             </Styled.RangeContainer>
//           </Styled.Content>
//           <Styled.Footer>
//             <span>92%</span>
//           </Styled.Footer>
//         </Styled.Container>
//       )}
//     </Observer>
//   );
// }