import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100vw;
    height: 60px;
    background-color: rgba(68,68,68,0.3);

    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    backdrop-filter: blur(14px);
  `}
`

export const WindowsOptions = styled.div`
  display: flex;
  gap: 1rem;
`