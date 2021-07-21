import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 600px;
  width: 50%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center
`

export const Description = styled.p`
  font-size: 1.4rem;
  margin: 3rem 4rem 5rem 4rem;
  text-align: center;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LevelContainer = styled.div`
  height: 400px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #10E5BA;
  color: black;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    box-sizing: border-box;
  }
`

export const Image = styled.img`
  max-width: 200px;
`

export const Title = styled.p`
  padding: 1rem;
  font-size: 1.4rem;

`