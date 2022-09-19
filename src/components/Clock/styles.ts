import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin: .2rem;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 10%;


  :hover {
    background: rgba(255,255,255,.2);
  }
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.segoe};
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white}
  `}
`