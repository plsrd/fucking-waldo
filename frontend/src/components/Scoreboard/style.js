import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0 ;
  position: fixed;
  top: 6rem;
  background: white;
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