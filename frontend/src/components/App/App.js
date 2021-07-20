import React, { useEffect, useState} from 'react'
import sanityClient from '../../sanity/client'
import { urlFor } from '../../sanity/config'

import './reset.css'

import Level from '../Level/Level'

const App = () => {
  return (
    <Level number={1} />
  )
}

export default App;