import styled from "styled-components";

export const Container = styled.div`
  height: 385px;
  width: 330px;
  border-radius: 10px;
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.background};

  margin: 0 1rem;

  span{
    font-weight: 700;
    font-size: 18px;
    color: ${({theme}) => theme.colors.gray[900]};
    display: block;
    height: 2.5rem;
  }

  small{
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray[200]};
  }

  .divisor{
    width: 60px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.secondary.main};
    margin: 2rem 0 1rem 0;
  }
`

export const Badge = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 80px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    background-color: ${({color, theme}) => {
      if(color === 'blue'){
        return `${theme.colors.primary.main}`
      }else if(color === 'orange'){
        return `${theme.colors.secondary.main}`
      }else{
        return `${theme.colors.primary.light}`
      }
    }};
`