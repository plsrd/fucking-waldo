import React, { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import sanityClient from '../../sanity/client'
import { highScoreQuery } from '../../sanity/queries'

import { Container, Title, Form, Label, Input, Button } from './style'

const Timer = ({ levelComplete, levelNumber }) => {
  const [existingHighscore, setExistingHighscore] = useState()
  const [isHighscore, setIsHighscore] = useState(false)
  const [initials, setInitials] = useState('')

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

  const handleChange = (e) => {
    setInitials(e.target.value)
  }

  const handleClick = () => {

  }

  return (
    <Container>
      {
        isHighscore ?
          <>
            <Title>New High Score!!</Title>
            <Form>
              <Label>Enter your initials:
              <Input 
                type='text'
                name='initials'
                value={initials}
                onChange={handleChange}
                maxLength='4'
              />
              </Label>
              <Button onClick={handleClick}>Submit</Button>
            </Form>
          </>
        :
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '50px'}}>
              <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </div>
          </div>
      }
    </Container>
  );
}

export default Timer