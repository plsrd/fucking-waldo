import React from 'react'
import { urlFor } from '../../sanity/config'
import {
  Container,
  Character, 
  Preview,
  Name
} from './style'

const Scoreboard = ({ characters }) => {
  const characterComponents = characters.map(character => (
    <Character key={character.name}>
      <Preview src={urlFor(character.previewImage)} />
      <Name found={character.found}>{character.name}</Name>
    </Character>
  ))
  return (
    <Container>
      { characterComponents }
    </Container>
  )
}

export default Scoreboard
