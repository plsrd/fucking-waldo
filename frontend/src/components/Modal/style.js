import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: ${({x}) => `${x}px`};
  top: ${({y}) => `${y}px`};
  display: flex;
  flex-direction: column;
`

export const CharacterSelect = styled.button`
  text-decoration: ${props => props.found ? 'line-through' : 'none'}
`

export const CancelBtn = styled.button``
