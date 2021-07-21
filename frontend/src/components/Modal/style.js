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
  cursor: pointer;
  font-size: 1rem;
  padding: .2rem 1rem;
  background-color: white;
  &:hover {
    border: 2px solid black;
    box-sizing: content-box;
  }
`

export const CharacterSelect = styled.button`
  ${buttonStyles};
  text-decoration: ${props => props.found ? 'line-through' : 'none'};
`

export const CancelBtn = styled.button`
  ${buttonStyles}
  background-color: lightgrey;
`

export const Found = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem 0
`
