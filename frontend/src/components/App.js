import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import imageUrlBuilder from "@sanity/image-url"

import './reset.css'

const builder = imageUrlBuilder(sanityClient);

const urlFor =(source) => {
    return builder.image(source);
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Image = styled.img`
`

function App() {
  const [level, setLevel] = useState({})

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == 'level']{
        number,
        mainImage,
        characters
      }[0]`
    )
      .then(data => setLevel(data))
      .catch(console.error)
  }, [])

  const handleClick = (e) => {
    const coords =  {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    }
    console.log(coords)
  }

  console.log(level)

  return (
    <Container>
      {level.mainImage && 
        <Image 
          src={urlFor(level.mainImage)}
          onClick={handleClick}
        />
      }
    </Container>
  );
}

export default App;
