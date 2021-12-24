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

  .content{
    margin-top: 8.5rem;
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

      
      .illustration{
        height: 375px;
        width: 390px;
        z-index: 11;
      }

      .e1{
        position: relative;
        left: 50rem;
        top: -9rem;

        animation: img 2s linear infinite;
        z-index: 10;

        @keyframes img {
          to { transform: rotate(-360deg)}
        }
      }
      .e2{
        position: relative;
        left: 46rem;
        top: -7rem;

        animation: img 6s linear infinite;
        z-index: 10;

        @keyframes img {
          to { transform: rotate(360deg)}
        }
      }
      .e3{
        position: relative;
        left: 35rem;
        top: -3rem;
        animation: img 2s linear infinite;
        z-index: 10;

        @keyframes img {
          to { transform: rotate(-360deg)}
        }
      }
      .e4{
        position: relative;
        left: 34rem;
        top: -8rem;
        animation: img 4s linear infinite;
        z-index: 10;

        @keyframes img {
          to { transform: rotate(360deg)}
        }
      }
      .e5{
        position: relative;
        left: 28rem;
        top: 1rem;
        animation: img 3s linear infinite;
        z-index: 10;

        @keyframes img {
          to { transform: rotate(-360deg)}
        }
      }
      .e6{
        position: relative;
        left: 25rem;
        top: -6rem;

        animation: img 2s linear infinite;
        z-index: 10;

        @keyframes img {
          to { transform: rotate(360deg)}
        }
      }
      .e7{
        position: relative;
        left: 24rem;
        top: -10rem;

        animation: img 5s linear infinite;
        z-index: 10;

        @keyframes img {
          to { transform: rotate(-360deg)}
        }
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

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  z-index: 15;
  position: sticky !important;
  top: 0;

   .nav{
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-between;
    position: absolute;
    width: 100vw;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;

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
`