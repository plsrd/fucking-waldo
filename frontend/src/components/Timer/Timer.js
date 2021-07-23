import React, { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import sanityClient from '../../sanity/client'
import { highScoreQuery } from '../../sanity/queries'

const Timer = ({ levelComplete, levelNumber }) => {
  const [existingHighscore, setExistingHighscore] = useState()
  const {
    seconds,
    minutes,
    pause
  } = useStopwatch({ autoStart: true })

  const isHighscore = () => {
    const timeInSeconds = minutes * 60 + seconds

  }
 
  useEffect(() => {
    const params = { levelNumber: levelNumber - 1}
    sanityClient.fetch(highScoreQuery, params)
        .then(data => setExistingHighscore(data))
  }, [])

  useEffect(() => {
    if (levelComplete === true) {
      pause()
      console.log(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`)
    }
  }, [levelComplete])

  console.log(existingHighscore)

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '50px'}}>
        <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default Timer