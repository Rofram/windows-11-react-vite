import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0.5rem;
  margin-right: 1rem;
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.segoe};
    font-weight: 500;
    font-size: ${theme.font.sizes.xsmall};  
    color: ${theme.colors.white}
  `}
`