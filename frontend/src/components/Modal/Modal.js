import React from 'react'
import { Container, CharacterSelect, CancelBtn, Found } from './style'

export const Modal = ({ characters, position, handleSelection, characterFound }) => {
  return (
    <Container x={position.x} y={position.y}>
      {characterFound ? 
        <Found>{characterFound.name? `You found ${characterFound.name}!` : 'Wrong!'}</Found>
        :
        (
          <>
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
          </>
        )
      }
    </Container>
  )
}

export default Modal
