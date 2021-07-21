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

export const CharacterSelect = styled.button`
  text-decoration: ${props => props.found ? 'line-through' : 'none'}
`

export const CancelBtn = styled.button``

export const Found = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem 0
`
