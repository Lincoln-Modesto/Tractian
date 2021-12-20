import styled from 'styled-components'

export const Button = styled.button`
  height: 60px;
  width: 160px;
  background-color: ${({theme}) => theme.colors.secondary.main};
  color: ${({theme}) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;

  display: block;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
`

export const LeakedButton = styled.button`

`