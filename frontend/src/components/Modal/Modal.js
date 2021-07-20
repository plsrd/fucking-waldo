import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  left: ${({x}) => `${x}px`};
  top: ${({y}) => `${y}px`};
  display: flex;
  flex-direction: column;
  
`

const Name = styled.button``

export const Modal = ({ names, position}) => {
  return (
    <Container x={position.x} y={position.y}>
      {names.map(name => (
        <Name key={name}>{name}</Name>
      ))}
    </Container>
  )
}

export default Modal
