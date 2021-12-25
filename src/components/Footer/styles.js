import styled from "styled-components";

import hero from '../../assets/hero.jpg'

export const Container = styled.footer`
  height: 400px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 991.98px){
    height: auto;
  }
`

export const Content = styled.div`

  padding: 1rem 2rem;

  >div{
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;

    h4{
      margin-bottom: 1rem;
    }

    div{
      margin-top: 2rem;

      span{
        color: ${({theme}) => theme.colors.primary.lighter};
        font-size: 12px;
        font-weight: 500;

        small{
          font-size: 10px;
          font-weight: 300;
        }
      }

      a{
        display: block;
        margin-bottom: 0.45rem;
        color: ${({theme}) => theme.colors.gray[100]};
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;

        :hover{
          text-decoration: underline;
        }

        :active{
          border: none;
          color: ${({theme}) => theme.colors.gray[100]};
        }
      }
    }
  }

    .invests{
      margin-top: 2rem;

      >div{
        
        display: flex;
        align-items: center;

        img{
          width: 150px;
          height: 40px;
          margin-right: 1rem;

          @media (min-width: 768px) and (max-width: 991.98px){
            zoom: 0.85;
          }
        }
      }
    }
    
    .awards{
      margin-top: 2rem;

      >div{
        display: flex;
        align-items: center;

        img{
          width: 60px;
          height: 60px;
          margin-right: 1rem;

          @media (min-width: 768px) and (max-width: 991.98px){
            width: 48px;
            height: 48px;
          }
        }
      }
    }

    .container-icons{
      margin-top: 2rem;
      
      .icons{
      display: flex;
      align-items: center;
      cursor: pointer;

      img{
        width: 36px;
        height: 36px;
        margin-right: 1rem;

        @media (min-width: 768px) and (max-width: 991.98px){
          width: 24px;
          height: 24px;
        }
      }
    }
    }

  
`