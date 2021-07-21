import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 600px;
  width: 50%;
  margin: 1rem auto;
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
  padding: 1rem;
  background-color: #8A5CFF;
  cursor: pointer;
  &:hover {
    background-color: #A785FF;
    box-shadow: 7px 7px 0px #8A5CFFFF;
  }
`

export const Image = styled.img`
  max-width: 200px;
`

export const Title = styled.p`
  padding: 1rem;
  font-size: 1.4rem;
  color: white;
`