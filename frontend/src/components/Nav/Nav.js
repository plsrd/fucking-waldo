import React from 'react'
import { Wrapper, Title, Button } from './style'

const Nav = ({ setCurrentLevel }) => {
  return (
    <Wrapper>
      <Title>Freak Seek</Title>
      <Button 
        onClick={() => setCurrentLevel()}
      >
        All Levels
      </Button>
    </Wrapper>
  )
}

export default Nav
