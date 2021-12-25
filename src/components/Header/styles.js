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

  /* Small devices (landscape phones, less than 768px)*/
  @media (max-width: 767.98px) {
    height: auto;
  }

  .content{
    margin-top: 8.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    /* Small devices (landscape phones, less than 768px)*/
    @media (max-width: 767.98px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .content-infos{
      display: block;
      width: 50%;

    /* Small devices (landscape phones, less than 768px)*/
    @media (max-width: 767.98px) {
      width: 100%;
    }

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

      /* Small devices (landscape phones, less than 768px)*/
      @media (max-width: 767.98px) {
       display: none;
      }

      @media (min-width: 768px) and (max-width: 991.98px){
        zoom: 0.8;
      }
      
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
    margin-left: 2rem;

    img{
      margin-left: 0.55rem;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  z-index: 15;
  position: fixed;
  top: 0;

   .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding: 1rem 2rem;
    width: 100vw;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;

    .logo{
      height: 20px;
      width: 160px;
      margin: 0 !important;
    }

    .active{
      transform: translateX(0) !important;
    }

    #nav-list{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 10vh;
      width: 100%;
      margin-left: 1rem;

      @media (max-width: 1130px) {
        position: absolute;
        top: 10vh;
        right: 0;
        width: 50vw;
        height: 92vh;
        background-color: ${({theme}) => theme.colors.primary.main};
        transform: translateX(100%);
        transition: transform 0.3s ease-in;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        .content-buttons{
          flex-direction: column;
          align-items: flex-start;
          margin: 3rem 2rem;
          padding: 0;

            a{
              margin-bottom: 3rem;
            }

            button{

              img{
                @media (max-width: 576px) {
                  display: none;
                }
              }
              
            }
        }

        ul{
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-left: 2rem;

          li{
            margin-top: 3rem;
            margin-left: 0;
          }
        }
      }
    }

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

    .mobile-menu{
      display: none;
      cursor: pointer;

      @media (max-width: 1130px) {
        display: block;
      }

      div{
      background-color: ${({theme}) => theme.colors.background};
      width: 32px;
      height: 2px;
      margin: 8px;
      }
    }
   
  }
`