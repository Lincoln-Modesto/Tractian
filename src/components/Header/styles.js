import styled from "styled-components";

import hero from '../../assets/hero.jpg'

export const Header = styled.header`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  height: 600px;
  width: 100%;
  margin-bottom: 3rem;
  padding: 1.5rem 2rem;

  display: block;
  align-items: flex-start;
  justify-content: center;

  .nav{
    width: 100%;
    display: flex;
    margin: 0 1rem;
    justify-content: space-between;


    .content-buttons{
      display: flex;
      align-items: center;

      a{
        margin-right: 2rem;
        color: ${({ theme }) => theme.colors.secondary.main};
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;

        :active{
          border: none;
        }

        :hover{
          text-decoration: underline;
        }
      }
    }
  }

  .content{
    margin-top: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .content-infos{
      display: block;
      width: 50%;

      h1{
        margin-bottom: 2rem;
      }

      h4{
        margin-bottom: 2rem;
      }

      >div{
        display: flex;

        button:not(:first-child){
          margin-left: 2rem;
        }
      }
    }

    .content-illustration{
      display: flex;
      justify-content: flex-end;
      width: 50%;

      img{
        height: 375px;
        width: 390px;
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
    color: ${({ theme }) => theme.colors.background};
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
      height: 20px;
      width: 160px;
      margin: 0 !important;
  }

`