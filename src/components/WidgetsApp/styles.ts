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
    width: 750px;
    height: 93%;
    position: absolute;
    background: rgba(255,255,255,.2);
    margin: .7%;
    backdrop-filter: blur(40px);
    border-radius: 8.75px;
    animation: ${!requestToClose ? openAnimation : closeAnimation} 200ms ease-in-out;
    padding: 2rem;
  `}
`

export const HeaderImage = styled.img`
  ${({ theme}) => css`
    width: 45px;
    height: 45px;
    border-radius: 50%;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 4rem;
      font-family: ${theme.font.family.segoe};
      font-weight: ${theme.font.light};
      color: white;
    }
  `}
`

export const HeaderButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    display: flex;
    flex: 1;
    height: 100%;
    width: 54px;
    align-items: center;
    justify-content: center;
    border-radius: 8.75px;
    

    :hover {
      backdrop-filter: brightness(.87);
    }
  `}
`

export const HeaderButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: rgba(214, 216, 219, .9);
    border-radius: 8.75px;
    align-items: center;
    height: 58px;
    justify-content: center;
    padding: 4px;
  `}
`

export const ChildWidget = styled.div`
  display: flex;
  background: rgb(255, 255, 255);
  border-radius: 8.75px;
`

export const WidgetsContainer = styled.div`
  ${({theme}) => css`
    padding: 20px;
  `}
`