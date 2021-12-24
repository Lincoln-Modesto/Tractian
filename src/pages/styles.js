import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 3rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};

  .content-main{
    margin-right: ${({reverse}) => reverse ? '0' : '6rem'};
    margin-left: ${({reverse}) => reverse ? '6rem' : '0'};;

    button{
      margin-top: 2rem;
    }

    ul{
      list-style: none;

      li{
        display: flex;
        margin-top: 3rem;
        align-items: center;

        div{
          max-width: 350px;
        }

        .check{
          padding: 0.5rem;
          margin-right: 1rem;
          border-radius: 5px;
          box-shadow: 0px 4px 4px 0px #00000040;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .number{
          padding: 0.5rem 1rem;
          margin-right: 1rem;
          border-radius: 5px;
          box-shadow: 0px 4px 4px 0px #00000040;

          display: flex;
          justify-content: center;
          align-items: center;

          font-weight: 700;
          font-size: 18px;
          color: ${({theme}) => theme.colors.background};
          background-color: ${({theme}) => theme.colors.secondary.main};
        }

        a{
          display: flex;
          align-items: center;
          cursor: pointer;
          text-decoration: none;

          img{
            margin-right: 1rem;
          }

          :hover{
            text-decoration: underline;
            color: ${({theme}) => theme.colors.secondary.main}
          }

          :active{
            border: none;
          }
        }

        h5{
            font-size: 16px;
            font-weight: 600;
        }

        small{
          font-size: 14px;
          font-weight: 500;
          color: ${({theme}) => theme.colors.gray[200]};

            h6{
              display: inline;
              font-size: 14px;
              font-weight: 700;
              color: ${({theme}) => theme.colors.secondary.main};
            }
        }
      }
    }
  }

  .img-hero{
    margin: 0;

    img{
      width: 700px;
      height: 390px;

      /* Large devices (desktops, less than 1200px)*/
      @media (min-width: 992px) and (max-width: 1199.98px){
        zoom: 0.8;
      }
    }

  }

  .img-hero2{
    /* Large devices (desktops, less than 1200px)*/
    @media (min-width: 992px) and (max-width: 1199.98px){
      zoom: 0.8;
    }
  }

  .content-sensors{
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span{
      margin-top: 1rem;
      color: ${({theme}) => theme.colors.primary.main};
      font-weight: 700;
    }

    >div{
      display: flex;
      justify-content: center;
      margin-top: 1rem;
  
      button{
        margin-right: 2rem;
      }

    }

    img{
       /* Large devices (desktops, less than 1200px)*/
       @media (min-width: 992px) and (max-width: 1199.98px){
        zoom: 0.8;
      }
    }
    
  }

  .section-3{
    margin-top: -5rem;
  }

  .img-section5{
    width: 500px;
    height: 300px;

    /* Large devices (desktops, less than 1200px)*/
    @media (min-width: 992px) and (max-width: 1199.98px){
        zoom: 0.8;
    }
  }

  .img-section4{
    img{
      /* Large devices (desktops, less than 1200px)*/
      @media (min-width: 992px) and (max-width: 1199.98px){
        zoom: 0.8;
      }
    }
  }

`

export const ContainerBackgroundBlue = styled.section`
  height: 600px;
  width: 100%;
  background: linear-gradient(180deg, rgba(34, 83, 198, 0.95) 0%, rgba(32, 172, 233, 0.8265) 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`