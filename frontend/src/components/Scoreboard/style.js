import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 0 0;
  position: fixed;
  top: 6rem;
  background: white;
  overflow-x: scroll;
`

export const Character = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Preview = styled.img`
  height: 80px;
`

export const Name = styled.p`
  font-size: 1.2rem;
  padding: .5rem;
  text-decoration: ${props => props.found ? 'line-through' : null}
`

export const Banner = styled.div`
  width: 100vw;
  background-color: #10E5BA;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BannerText = styled.p`
  color: white;
  font-size: 2rem;
  margin: 2rem 0 1.5rem 0;
  animation: heartbeat 1.5s ease-in-out infinite both;
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

export const Button = styled.button`
  margin-bottom: 2rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
