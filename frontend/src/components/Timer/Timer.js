import React, { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import sanityClient from '../../sanity/client'
import { highScoreQuery } from '../../sanity/queries'

const Timer = ({ levelComplete, levelNumber }) => {
  const [existingHighscores, setExistingHighscores] = useState()
  const {
    seconds,
    minutes,
    pause
  } = useStopwatch({ autoStart: true })

  useEffect(() => {
    sanityClient.fetch(highScoreQuery)
        .then(data => setExistingHighscores(data))
  }, [])

  useEffect(() => {
    if (levelComplete === true) {
      pause()
      console.log(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`)
    }
  }, [levelComplete])

  console.log(existingHighscores)

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default Timer