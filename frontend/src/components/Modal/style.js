import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: ${({x}) => `${x}px`};
  top: ${({y}) => `${y}px`};
  display: flex;
  flex-direction: column;
  width: 170px;
  background-color: #10E5BA;
  color: black;
  justify-content: center;
`

const buttonStyles = `
  border: none;
  font-family: 'Source Code Pro', monospace;
  font-size: .9rem;
  cursor: pointer;
  &:hover {
    color: black
  }
`

export const CharacterSelect = styled.button`
  ${buttonStyles};
  text-decoration: ${props => props.found ? 'line-through' : 'none'};
  background-color: ${props => props.found ? 'lightgrey' : '#e4007c'};
  color: ${props => props.found ? 'black' : 'white'};
  &:hover {
    background-color: ${props => props.found ? 'lightgrey' : 'white'};
    color: black
  }
`

export const CancelBtn = styled.button`
  ${buttonStyles}
  background-color: lightgrey;
  &:hover {
    background-color: white;
  }
`

export const Found = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem 0
`
