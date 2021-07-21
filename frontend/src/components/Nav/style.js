import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 100%;
  height: 6rem;
  background-color: #e4007c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`

export const Title = styled.h1`
  color: white;
  font-style: italic;
  font-size: 4rem;
  margin-left: 2rem;
  letter-spacing: -5px;
  font-weight: bold;
`
export const Button = styled.button`
  margin-right: 3rem;
  border-radius: 5px;
  border: none;
  background: transparent;
  color: white;
  font-family: 'Source Code Pro', monospace;
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;
  padding: .5rem 1rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
`