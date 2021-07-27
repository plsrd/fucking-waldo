import React, { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import sanityClient from '../../sanity/client'
import { highScoreQuery } from '../../sanity/queries'

import { Container, Title, Form, Label, Input, Button, TimerContainer, Time } from './style'

const Timer = ({ levelComplete, levelNumber }) => {
  const [existingHighscore, setExistingHighscore] = useState()
  const [isHighscore, setIsHighscore] = useState(false)
  const [initials, setInitials] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const {
    seconds,
    minutes,
    pause
  } = useStopwatch({ autoStart: true })
 
  useEffect(() => {
    const params = { number: levelNumber }
    sanityClient.fetch(highScoreQuery, params)
        .then(data => setExistingHighscore(data))
  }, [])

  useEffect(() => {
    if (levelComplete === true) {
      pause()
      const timeInSeconds = minutes * 60 + seconds
      timeInSeconds < existingHighscore.highScores.time && setIsHighscore(true)
    }
  }, [levelComplete])

  const handleChange = (e) => {
    setInitials(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const score = minutes * 60 + seconds
    sanityClient
      .patch(existingHighscore._id)
      .set({highScores: {playerName: initials, time: score}})
      .commit()
      .then((updatedDoc) => {
        console.log('Hurray, the score is updated!')
        console.log(updatedDoc)
      })
      .catch((err) => {
        console.error('Oh no, the update failed: ', err.message)
      })
    setSubmitting(true)
  }


  return (
    <Container>
      {
        isHighscore ?
          submitting ?
          <Title>Submitted!</Title>
          :
          <>
            <Title highScore={true}>New High Score!!</Title>
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
          <TimerContainer>
            <Title>Time ellapsed:</Title>
            <Time>
              {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
            </Time>
          </TimerContainer>
      }
    </Container>
  );
}

export default Timer