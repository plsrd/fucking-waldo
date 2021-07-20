import React, { useEffect, useState} from 'react'
import sanityClient from '../../sanity/client'
import { urlFor } from '../../sanity/config'
import { allLevelsQuery } from '../../sanity/queries'

import './reset.css'

import Level from '../Level/Level'

const App = () => {
  const [allLevels, setAllLevels] = useState()

  useEffect(() => {
    sanityClient.fetch(allLevelsQuery)
      .then(data => setAllLevels(data))
      .catch(console.error)
  }, [])

  console.log(allLevels)

  return (
    <Level number={1} />
  )
}

export default App;