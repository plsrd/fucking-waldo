import React, { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import sanityClient from '../../sanity/client'
import { highScoreQuery } from '../../sanity/queries'

const Timer = ({ levelComplete, levelNumber }) => {
  const [existingHighscore, setExistingHighscore] = useState()
  const [isHighscore, setIsHighscore] = useState(false)

  const {
    seconds,
    minutes,
    pause
  } = useStopwatch({ autoStart: true })
 
  useEffect(() => {
    const params = { number: levelNumber }
    sanityClient.fetch(highScoreQuery, params)
        .then(data => setExistingHighscore(data.highScores))
  }, [])

  useEffect(() => {
    if (levelComplete === true) {
      pause()
      console.log(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`)
      const timeInSeconds = minutes * 60 + seconds
      timeInSeconds < existingHighscore.time && setIsHighscore(true)
    }
  }, [levelComplete])

  return (
    <>
      {
        isHighscore ?
          <div>highscore!</div>
        :
          <div style={{textAlign: 'center'}}>
          <div style={{fontSize: '50px'}}>
            <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
          </div>
          </div>
      }
    </>

  );
}

export default Timer