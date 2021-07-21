import React, { useEffect, useState} from 'react'
import sanityClient from '../../sanity/client'
import { urlFor } from '../../sanity/config'
import { allLevelsQuery } from '../../sanity/queries'

import './reset.css'

import Level from '../Level/Level'
import Nav from '../Nav/Nav'

const App = () => {
  const [allLevels, setAllLevels] = useState()
  const [currentLevel, setCurrentLevel] = useState()

  useEffect(() => {
    sanityClient.fetch(allLevelsQuery)
      .then(data => setAllLevels(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Nav setCurrentLevel={setCurrentLevel}/>
      {currentLevel ? <Level number={currentLevel} /> : null }
    </>
  )
}

export default App;