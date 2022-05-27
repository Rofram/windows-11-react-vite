import styled, { keyframes } from "styled-components";

const openAnimation = keyframes`
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 70px;
  }
`;

const closeAnimation = keyframes`
  0% {
    bottom: 70px;
  }
  100% {
    bottom: -100%;
  }
`;

type IContainer = {
  requestToClose: boolean;
}

export const Container = styled.div<IContainer>`
  position: absolute;
  animation: ${({ requestToClose }) => requestToClose ? closeAnimation : openAnimation} 0.3s ease-in;
  z-index: 30;
`;