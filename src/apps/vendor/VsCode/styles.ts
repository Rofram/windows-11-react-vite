import styled from "styled-components";

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

export const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const HeaderText = styled.span`
  font-family: ${({ theme }) => theme.font.family.segoe};
  font-size: 12px;
  color: white;
`
