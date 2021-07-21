import React from 'react'
import { NavBar, Title, Button } from './style'

const Nav = ({ setCurrentLevel }) => {
  return (
    <NavBar>
      <Title>Freak Seek</Title>
      <Button 
        onClick={() => setCurrentLevel()}
      >
        All Levels
      </Button>
    </NavBar>
  )
}

export default Nav
