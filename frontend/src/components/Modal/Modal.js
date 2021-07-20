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

const Cancel = styled.button``

export const Modal = ({ characters, position, handleSelection }) => {
  return (
    <Container x={position.x} y={position.y}>
      {characters.map(character => (
        <Name 
          key={character.name}
          onClick={() => handleSelection(character.name)}
          found={character.found}
        >
          {character.name}
        </Name>
      ))}
      <Cancel
        onClick={() => handleSelection()}
      >
        Cancel
      </Cancel>
    </Container>
  )
}

export default Modal
