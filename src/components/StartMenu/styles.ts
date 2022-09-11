import styled, { css, keyframes } from "styled-components"
import { motion } from 'framer-motion'

const popupAnimation = keyframes`
  0% {
    transform: translateX(-50%);
    bottom: -1000px;
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
    bottom: -1000px;
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
  overflow: hidden;
  

  background-color: rgba(68,68,68,0.4);
  backdrop-filter: blur(40px);
  border-radius: 8.75px;
  z-index: 50;
`

export const Media = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding: 0 40px;
`

export const SearchBar = styled.div`
  ${({ theme }) => css`
    background-color: rgba(48,48,48,0.6);
    border: none;
    border-radius: 5px;
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    
    input {
      background: transparent;
      color: ${theme.colors.white};
      outline: none;
      border: none;
      width: 100%;
      padding: 10px;
      font-size: 1.7rem;

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

export const App = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.5px;
  border-radius: 8.75px;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(255,255,255,0.1);
  }
`

export const GridApps = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 15px;
  height: 315px;
`

export const ListApps = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: none;
  overflow-y: scroll;
  height: 750px;
  margin: 15px 40px 0 40px;
  height: 650px;

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
    width: 100%;
    padding: 8px 0;
    justify-content: flex-start;

    img {
      width: 30px;
      height: 30px;
    }
  }
`

export const ListName = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.segoe};
    font-size: 20px;
    padding: 10px;
    width: 100%;
    border-radius: 8.75px;

    &:hover {
      cursor: pointer;
      background-color: rgba(255,255,255,0.1);
    }
  `}
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

    :hover {
      backdrop-filter: brightness(0.9);
    }
    
    span {
      color: ${theme.colors.white};
      line-height: 27.5px;
    }
  `}
`

export const Recommended = styled.div`
  margin: 10px 30px 0 30px;
  height: 255px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 auto;
  column-gap: 40px;
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
    align-items: center;
    gap: 15px;
    padding: 8px;
    border-radius: 8.75px;
    cursor: pointer;

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

    :hover {
      background: rgba(255,255,255,0.1);
    }
  `}
`

export const Footer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;

  backdrop-filter: brightness(0.8);
  border-radius: 0 0 8.75px 8.75px;
  height: 80px;
  padding: 20px 80px;
  top: 91%;
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

