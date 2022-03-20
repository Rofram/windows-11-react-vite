import styled, { css } from "styled-components";

export const Container = styled.div`
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
  filter: brightness(0.8);
`

export const Header = styled.div`
  display: flex;
  height: 70px;
  background-color: rgba(68, 68, 68, 0.3);
  filter: brightness(0.8);
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 8.75px 8.75px 0 0;
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
      font-size: 1.9rem;
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

export const Day = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    
    span {
      color: ${theme.colors.white};
      font-size: 1.9rem;
      font-weight: 400;
      font-family: ${theme.font.family.openSans};
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
      font-size: 1.9rem;
      font-weight: 600;
      font-family: ${theme.font.family.openSans};
    }
  `}
`