import React, { useEffect, useState} from 'react'
import sanityClient from '../../sanity/client'
import { allLevelsQuery } from '../../sanity/queries'

import './reset.css'

import Level from '../Level/Level'
import Nav from '../Nav/Nav'
import LevelSelect from '../LevelSelect/LevelSelect'


const App = () => {
  const [allLevels, setAllLevels] = useState()
  const [currentLevel, setCurrentLevel] = useState()

  useEffect(() => {
    sanityClient.fetch(allLevelsQuery)
      .then(data => setAllLevels(data))
      .catch(console.error)
  }, [])

  console.log(allLevels)

  return (
    <>
      <Nav setCurrentLevel={setCurrentLevel}/>
      {currentLevel ? 
        <Level 
          number={currentLevel}
          setCurrentLevel={setCurrentLevel}
        /> 
        : 
        allLevels && 
          <LevelSelect 
            levels={allLevels}
            setCurrentLevel={setCurrentLevel}
          /> 
      }
    </>
  )
}

export default App;