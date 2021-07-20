import React, { useEffect, useState} from 'react'
import sanityClient from '../../sanity/client'
import { urlFor } from '../../sanity/config'
import { levelQuery } from '../../sanity/queries'

import Modal from '../Modal/Modal'

import { Container, Image } from './style'

const Level = (number) => {
  const [levelData, setLevelData] = useState({})
  const [characterData, setCharacterData] = useState()
  const [clickCoords, setClickCoords] = useState()
  const [modalLocation, setModalLocation] = useState()

  useEffect(() => {
    sanityClient.fetch(levelQuery, number)
      .then(data => {
        setLevelData({
          number: data.number,
          mainImage: data.mainImage
        })
        const characters = data.characters.map(character => ({
          ...character,
          found: false
        }))
        setCharacterData(characters)
      })
      .catch(console.error)

  }, [])

  const handleClick = e => {
    const coords =  {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    }

    setClickCoords(coords)

    setModalLocation({
      x: e.pageX,
      y: e.pageY
    })
  }

  const handleSelection = name => {
    if (!name) { 
      setModalLocation()
      setClickCoords()
      return
    }
    
    const character = characterData.find(character => character.name === name)

    if (character.found) { return }

    if (clickCoords.x >= character.positionX.startX && 
      clickCoords.x <= character.positionX.endX &&
      clickCoords.y >= character.positionY.startY && 
      clickCoords.y <= character.positionY.endY) {
        const newCharacter = {
          ...character,
          found: true
        }

        const characters = characterData.slice()
        characters.splice(characters.indexOf(character), 1, newCharacter)
        setCharacterData(characters)
    }

    setModalLocation()
  }

  return (
    <Container>
      {
        levelData.mainImage && 
          <Image 
            src={urlFor(levelData.mainImage)}
            onClick={handleClick}
          />
      }
      {
        modalLocation &&
          <Modal
            position={modalLocation}
            characters={characterData}
            handleSelection={handleSelection}
          />
      }
    </Container>
  )
}

export default Level