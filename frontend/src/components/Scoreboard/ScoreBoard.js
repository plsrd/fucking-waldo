import React from 'react'
import { urlFor } from '../../sanity/config'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0 ;
  position: fixed;
  top: 6rem;
  background: white;
`

const Character = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Preview = styled.img`
  height: 80px;
`

const Name = styled.p`
  font-size: 1.2rem;
  padding: .5rem;
`

const Scoreboard = ({ characters }) => {
  const characterComponents = characters.map(character => (
    <Character key={character.name}>
      <Preview src={urlFor(character.previewImage)} />
      <Name>{character.name}</Name>
    </Character>
  ))
  return (
    <Container>
      { characterComponents }
    </Container>
  )
}

export default Scoreboard
