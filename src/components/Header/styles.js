import styled from "styled-components";

import hero from '../../assets/hero.jpg'

export const Header = styled.header`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  height: 600px;
  width: 100%;
  margin-bottom: 3rem;
  padding: 2rem 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  >div{
    width: 100%;
    display: flex;
    justify-content: space-between;

    .content-buttons{
      display: flex;
      align-items: center;

      a{
        margin-right: 2rem;
        color: ${({theme}) => theme.colors.secondary.main};
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`

export const NavList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  li{
    color: ${({theme}) => theme.colors.background};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    img{
      margin-left: 0.55rem;
    }
  }

  li:not(:first-child){
    margin-left: 2rem;
  }

  .logo{
      height: 40px;
      width: 250px;
      margin: 0 !important;
  }

`