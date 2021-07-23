import React from 'react'
import { urlFor } from '../../sanity/config'

import Timer from '../Timer/Timer'

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

const Scoreboard = ({ characters, levelComplete, setCurrentLevel, levelNumber }) => {
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
        <Timer 
          levelComplete={levelComplete} 
          levelNumber={levelNumber}
        />
      </Wrapper>
      {
        levelComplete &&
          <Banner>
            <BannerText>Level Complete!</BannerText>
            <Button 
              onClick={() => setCurrentLevel()}
            >
              Select New Level
            </Button>
          </Banner>
      }
    </Container>
  )
}

export default Scoreboard
