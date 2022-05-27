import styled, { css, keyframes } from "styled-components";

type IContainer = {
  requestToClose?: boolean;
  isFocused?: boolean;
  isMaximized?: boolean;
  isMinimized?: boolean;
}

const windowOpenAnimation = keyframes`
  0% {
    width: 55rem;
    height: 30.9375rem;
    opacity: 0;
  }
  100% {
    width: 110rem;
    height: 61.875rem;
    opacity: 1;
  }
`

const windowCloseAnimation = keyframes`
  0% {
    width: 110rem;
    height: 61.875rem;
    opacity: 1;
  }
  100% {
    width: 55rem;
    height: 30.9375rem;
    opacity: 0;
  }
`

export const Container = styled.div<IContainer>`
  ${({ requestToClose, isFocused, isMinimized, isMaximized }) => css`
    resize: both;
    width: 110rem;
    height: 61.875rem;
    
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14px);

    position: absolute;
    border-radius: 8.75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${isFocused ? "15" : "5"};

    animation: ${requestToClose ? windowCloseAnimation : windowOpenAnimation} 0.3s ease;
  `}
`

export const Header = styled.div`
  display: flex;
  height: 40px;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 1rem;
  border-radius: 8.75px 8.75px 0 0;

  justify-content: flex-end;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 8.75px 8.75px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 8.75px 8.75px;
  }
`

