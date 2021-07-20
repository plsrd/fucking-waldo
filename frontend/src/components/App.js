import React from 'react'
import styled from 'styled-components'

import './reset.css'
import sciScape from '../images/sciscape.jpg'

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Image = styled.img`
`

function App() {

  const handleClick = (e) => {
    const coords =  {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    }
    console.log(coords)
  }

  return (
    <Container>
      <Image 
        src={sciScape}
        onClick={handleClick}
      />
    </Container>
  );
}

export default App;
