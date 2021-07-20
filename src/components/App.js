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

// ridleyLocation = {
//   x: 615,
//   y: 351
// }

function App() {

  const handleClick = (e) => {
    console.log('click location x:', e.pageX - e.target.offsetLeft)
    console.log('click location y:', e.pageY - e.target.offsetTop)
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
