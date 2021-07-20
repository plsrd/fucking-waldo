import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  left: ${({x}) => `${x}px`};
  top: ${({y}) => `${y}px`};
  display: flex;
  flex-direction: column;
`

const Name = styled.button`
  text-decoration: ${props => props.found ? 'line-through' : 'none'}
`

export const Modal = ({ names, position, handleSelection }) => {
  return (
    <Container x={position.x} y={position.y}>
      {names.map(name => (
        <Name 
          key={name}
          onClick={() => handleSelection(name)}
          found={name.found}
        >
          {name}
        </Name>
      ))}
    </Container>
  )
}

export default Modal
