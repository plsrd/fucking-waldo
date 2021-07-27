import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`

export const Title = styled.p`
  font-size: 1.2rem;
  margin: .2rem;
  animation: ${props => props.highScore ? 'heartbeat 1.5s ease-in-out infinite both;' : ''};
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: center center;
              transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
              transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
              transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
              transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  margin: .4rem;
`

export const Button = styled.button`
  background-color: white;
  border: none;
  font-family: 'Source Code Pro', monospace;
  margin: .3rem 0 1rem 0;
  padding: .2rem .4rem;
  border: 1px solid black;
  &:hover {
    color: white;
    background-color: black;
  }
`

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Time = styled.p`
  font-size: 2rem;
`