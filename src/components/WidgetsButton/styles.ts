import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;

  &:hover {

  }
`

export const WeatherText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    span {
      font-family: ${theme.font.family.segoe};
      font-size: ${theme.font.sizes.small};
      font-weight: 500;
      color: ${theme.colors.white};
    }

    span:first-child {
      font-weight: bold;
    }
  `}
`
