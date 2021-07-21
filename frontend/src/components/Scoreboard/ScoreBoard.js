import React from 'react'
import { urlFor } from '../../sanity/config'
import {
  Container,
  Character, 
  Preview,
  Name,
  Banner,
  BannerText,
  Wrapper,
  Button
} from './style'

const Scoreboard = ({ characters, levelComplete }) => {
  const characterComponents = characters.map(character => (
    <Character key={character.name}>
      <Preview src={urlFor(character.previewImage)} />
      <Name found={character.found}>{character.name}</Name>
    </Character>
  ))
  return (
    <Container>
      <Wrapper>
        { characterComponents }
      </Wrapper>
      {
        levelComplete &&
          <Banner>
            <BannerText>Level Complete!</BannerText>
            <Button>Select New Level</Button>
          </Banner>
      }
    </Container>
  )
}

export default Scoreboard
