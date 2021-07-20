import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import sanityClient from '../sanity'
import imageUrlBuilder from "@sanity/image-url"

import './reset.css'

import Modal from './Modal/Modal'

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
    return builder.image(source);
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
`

const Image = styled.img`
`

function App() {
  const [level, setLevel] = useState({})
  const [coords, setCoords] = useState()
  const [modalLocation, setModalLocation] = useState()

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == 'level']{
        number,
        mainImage,
        characters[]{
          name,
          previewImage,
          positionX,
          positionY
        }
      }[0]`
    )
      .then(data => setLevel(data))
      .catch(console.error)
  }, [])


  const handleClick = e => {
    const coords =  {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    }
    setCoords(coords)
    setModalLocation({
      x: e.pageX,
      y: e.pageY
    })
  }

  const handleSelection = name => {
    const { characters } = level
    const character = characters.find(character => character.name === name)
    console.log(coords.x >= character.positionX.startX && 
      coords.x <= character.positionX.endX &&
      coords.y >= character.positionY.startY && 
      coords.y <= character.positionY.endY
    )
    setModalLocation()
  }

 

  return (
    <Container>
      {level.mainImage && 
        <Image 
          src={urlFor(level.mainImage)}
          onClick={handleClick}
        />
      }
      {
        (modalLocation && level.characters) ?
          <Modal
            position={modalLocation}
            names={level.characters.map(character => character.name)}
            handleSelection={handleSelection}
          />
          :
          null
      }
    </Container>
  );
}

export default App;
