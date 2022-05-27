import styled, { css, keyframes } from "styled-components";

type IContainer = {
  requestToClose: boolean;
}

const windowOpenAnimation = keyframes`
  0% {
    width: 550px;
    height: 309.375px;
    opacity: 0;
  }
  100% {
    width: 1100px;
    height: 618.75px;
    opacity: 1;
  }
`

const windowCloseAnimation = keyframes`
  0% {
    width: 1100px;
    height: 618.75px;
    opacity: 1;
  }
  100% {
    width: 550px;
    height: 309.375px;
    opacity: 0;
  }
`

export const Container = styled.div<IContainer>`
  ${({ theme, requestToClose }) => css`
    resize: both;
    width: 1100px;
    height: 618.75px;
    box-shadow: 11px;
    
    background-color: ${theme.colors.white};

    position: absolute;
    border-radius: 8.75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: ${requestToClose ? windowCloseAnimation : windowOpenAnimation} 0.3s ease;
  `}
`

export const Header = styled.div`
  display: flex;
  height: 40px;
  background-color: #56585d;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 1rem;
  border-radius: 8.75px 8.75px 0 0;

  justify-content: space-between;
  align-items: center;

  input {
    background: #46474b;
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    border: none;
    width: 50%;
    padding: 10px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem
  }
`

export const Media = styled.div`
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

