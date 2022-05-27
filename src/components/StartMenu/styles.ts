import styled, { createGlobalStyle, css, keyframes } from "styled-components"
import { Container } from '../../core/systemApp/styles'

/*
const popupAnimation = keyframes`
  0% {
    transform: translateX(-50%);
    bottom: -100%;
  }
  100% {
    transform: translateX(-50%);
    bottom: 70px;
  }
`

const closeAnimation = keyframes`
  0% {
    transform: translateX(-50%);
    bottom: 70px;
  }
  100% {
    transform: translateX(-50%);
    bottom: -100%;
  }
`

type IContainer = {
  requestToClose: boolean
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 925px;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({ requestToClose }) => requestToClose ?  closeAnimation : popupAnimation} 0.5s ease-in-out;
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  filter: brightness(0.8);
  border-radius: 8.75px;
  z-index: 50;
`
*/

export const Media = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;

  ${createGlobalStyle`
    ${Container} {
      display: flex;
      flex-direction: column;
      width: 800px;
      height: 925px;
      position: absolute;
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);

      background-color: rgba(68,68,68,0.4);
      backdrop-filter: blur(40px);
      filter: brightness(0.8);
      border-radius: 8.75px;
      z-index: 50;
    }
  `}
`

export const SearchBar = styled.div`
  ${({ theme }) => css`
    background-color: rgba(48,48,48,0.6);
    border: none;
    border-radius: 5px;
    position: relative;
    
    
    input {
      background: transparent;
      color: ${theme.colors.white};
      outline: none;
      border: none;
      width: 100%;
      padding: 10px;

      &::placeholder {
        color: ${theme.colors.white};
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: aqua;
    }
  `}
`

export const HeaderApps = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 40px 40px 0 40px;

    justify-content: space-between;

    > span {
      color: ${theme.colors.white};
      font-family: ${theme.font.family.segoe};
      font-weight: bold;
      font-size: 15px;
    }
  `}
`

export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;

  img {
    width: 40px;
    height: 40px;
  }
`

export const GridApps = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`

export const ListApps = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: none;
  overflow-y: scroll;
  height: 750px;
  margin: 15px 40px 0 40px;

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background: transparent;
  }

  ${App} {
    flex-direction: row;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`

export const AppName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.segoe};
    font-size: 15px;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    width: 97px;
    height: 28px;
    background: transparent;
    backdrop-filter: brightness(0.7);
    border-radius: 5px;
    border: none;
    
    span {
      color: ${theme.colors.white};
      line-height: 27.5px;
    }
  `}
`

export const Recommended = styled.div`
  margin: 10px 40px 0 40px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
`

export const RecommendedHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px;

    h2 {
     font-family: ${theme.font.family.segoe};
     font-size: 17.5px;
     font-weight: bold;
     color: ${theme.colors.white};
    }
  `}
`

export const RecommendedApp = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: 15px;

    div {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 40px;
      height: 40px;
    }

    span {
      color: ${theme.colors.white};
      font-family: ${theme.font.family.segoe};
      font-weight: normal;
      font-size: 15px;
    }

    p {
      color: rgba(255,255,255,0.7);
      font-family: ${theme.font.family.roboto};
    }
  `}
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.family.segoe};
    font-size: 15px;
    font-weight: normal;
  }
`

