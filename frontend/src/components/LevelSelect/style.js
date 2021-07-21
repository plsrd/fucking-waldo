import styled from 'styled-components'

export const Wrapper = styled.div`
  border:   1px solid black;
  border-radius: 10px;
  height: 600px;
  width: 50%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center
`

export const Description = styled.p`
  font-size: 1.4rem;
  margin: 3rem 4rem;
  text-align: center;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
  }
`

export const Image = styled.img`
  max-width: 200px;
  border-radius: 10px;
`

export const Title = styled.p`
  padding: 1rem;
  font-size: 1.2rem;
`