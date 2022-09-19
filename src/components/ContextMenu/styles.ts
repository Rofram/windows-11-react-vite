import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'


export const Item = styled.div`
  ${({theme}) => css`
    display: flex;
    width: 100%;
    height: 40px;
    color: white;
    align-items: center;
    font-family: ${theme.font.family.segoe};
    font-size: ${theme.font.sizes.large};
    text-transform: capitalize;
    cursor: pointer;

    gap: 16px;
    border-radius: 8.75px;

    :hover {
      background: rgba(255,255,255,.2);
    }

    img {
      width: 35px;
    }
  `}
`

export const Title = styled.span`

`

type ContainerProps = {
  x: number
  y: number
}

export const Container = styled(motion.div)<ContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  z-index: 9999;
  backdrop-filter: blur(40px);
  background: rgba(0,0,0,.2);
  width: 250px;
  border-radius: 8.75px;
  gap: 20px;
  padding: 10px;
  
`