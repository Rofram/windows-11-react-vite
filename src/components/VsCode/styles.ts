import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    resize: both;
    width: 1100px;
    height: 618.75px;
    
    background-color: ${theme.colors.white};

    position: absolute;
    border-radius: 8.75px;
  `}
`

export const Header = styled.div`
  height: 40px;
  display: flex;
  background-color: #252526;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8.75px 8.75px 0 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

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

export const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const HeaderText = styled.span`
  font-family: ${({ theme }) => theme.font.family.segoe};
  font-size: 12px;
  color: white;
`
