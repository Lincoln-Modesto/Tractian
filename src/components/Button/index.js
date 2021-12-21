import styled from 'styled-components'

export const Button = styled.button`
  width: ${({small}) => small ? '' : '150px'};
  height: 60px;
  background-color: ${({theme}) => theme.colors.secondary.main};
  color: ${({theme}) => theme.colors.background};
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 15px 15px;
  border: none;
  border-radius: 5px;

  display: block;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  transition: filter 0.2s;

  :hover{
    filter: brightness(0.91);
  }
`

export const LeakedButton = styled.button`
  width: 150px;
  height: 60px;
  background-color: transparent;
  color: ${({theme}) => theme.colors.secondary.main};
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 15px 15px;
  border: none;
  border-radius: 5px;
  border: 2px solid ${({theme}) => theme.colors.secondary.main};

  display: block;
  align-items: center;

  font-size: 14px;
  font-weight: 700;

  :hover{
    background-color: ${({theme}) => theme.colors.secondary.main};
    color: ${({theme}) => theme.colors.background};
    font-weight: 500;
  }
`