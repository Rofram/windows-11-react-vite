import styled, { css, keyframes } from 'styled-components'

const openAnimation = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const closeAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%);
    opacity: 0;
  }
`

type ContainerProps = {
  requestToClose?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ requestToClose, theme }) => css`
    width: 30%;
    height: 93%;
    position: absolute;
    background: rgba(255,255,255,.2);
    margin: .7%;
    backdrop-filter: blur(40px);
    border-radius: 8.75px;
    animation: ${!requestToClose ? openAnimation : closeAnimation} 200ms ease-in-out;
  `}
`

export const ChildWidget = styled.div`

`