import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 1rem;
  border-radius: 8.75px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const TrayIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const ShapeContainer = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${TrayIcon} {
    width: 12px;
    height: 6.5px;
  }
`