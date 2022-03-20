import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8.75px;

    &:hover {
      background-color: rgba(255,255,255,0.1);
    }
  }
`

export const App = styled.img`
  width: 30px;
  height: 30px;
  outline: none;
`