import React from 'react'
import { Container, CharacterSelect, CancelBtn } from './style'

export const Modal = ({ characters, position, handleSelection }) => {
  return (
    <Container x={position.x} y={position.y}>
      {characters.map(character => (
        <CharacterSelect 
          key={character.name}
          onClick={() => handleSelection(character.name)}
          found={character.found}
        >
          {character.name}
        </CharacterSelect>
      ))}
      <CancelBtn
        onClick={() => handleSelection()}
      >
        Cancel
      </CancelBtn>
    </Container>
  )
}

export default Modal
