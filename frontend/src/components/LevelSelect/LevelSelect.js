import React from 'react'
import { urlFor } from '../../sanity/config'

import { 
  LevelContainer, 
  Image, 
  Title, 
  Wrapper, 
  Description, 
  LinkContainer 
} from './style'

const LevelSelect = ({ levels, setCurrentLevel }) => {

  const levelComponents = levels.map(level => (
    <LevelContainer 
      key={level.number}
      onClick={() => setCurrentLevel(level.number)}
    >
      <Image src={urlFor(level.mainImage).width(200)} />
      <Title>Level {level.number}</Title>
    </LevelContainer>
  ))

  return (
    <Wrapper>
      <Description>
        Challenge yourself to find all of the classic Sci-fi and Horror characters listed in each level!
      </Description>
      <LinkContainer>
        {levelComponents}
      </LinkContainer>
    </Wrapper>
  )
}

export default LevelSelect