import styled, { css } from "styled-components";
import { darken } from 'polished'

type IContainer = {
  requestToClose?: boolean;
}

export const Container = styled.div<IContainer>`
  ${({ theme, requestToClose }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 8.75px;
    position: absolute;
    bottom: 70px;
    right: 15px;
    width: 470px;
    height: 515px;
    background-color: rgba(68, 68, 68, 0.4);
    backdrop-filter: blur(40px);
  `}
`

export const Header = styled.div`
  display: flex;
  height: 70px;
  background-color: rgba(68, 68, 68, 0.3);
  color: ${({ theme }) => theme.colors.white};
  padding: 0 2rem;
  border-radius: 8.75px 8.75px 0 0;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.font.family.openSans};
    color: #fff;
    
    &:hover {
      filter: brightness(0.8);
      cursor: default;
    }
  }
`

export const CalendarTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 6px;
    
    div {
      display: flex;
      gap: 1rem;
      padding: 1.2rem 2.2rem;
    }

    span {
      font-size: 1.6rem;
      font-weight: 600;
      font-family: ${theme.font.family.openSans};
      color: ${theme.colors.white};
      text-transform: capitalize;
    }
  `}
`

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 0 3rem;
  place-content: center;
`

type DayProps = {
  isToday?: boolean;
  isSelected?: boolean;
}

export const Day = styled.div<DayProps>`
  ${({ theme, isToday, isSelected }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: ${isToday ? theme.colors.primary : 'transparent'};

    span {
      color: ${isToday ? '#000' : theme.colors.white};
      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${theme.font.family.openSans};
      cursor: default;
    }

    ${isSelected 
      ? isToday 
          ? css`
              border: 1px solid black;
          ` 
          : css`
              border: 1px solid ${theme.colors.primary};
              backdrop-filter: brightness(0.8);

              span {
                color: ${theme.colors.primary};
              }
          `
      : css`
          border: none;
        `
      }
    
    ${isToday 
      ? css`
        &:hover {
          background: ${darken(0.1, theme.colors.primary)};
        }
      `
      : css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `
    }
  `}
`

export const DayOfWeek = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    
    span {
      color: ${theme.colors.white};
      font-size: 1.6rem;
      font-weight: 600;
      font-family: ${theme.font.family.openSans};
    }
  `}
`