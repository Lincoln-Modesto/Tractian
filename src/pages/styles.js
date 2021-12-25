import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 3rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};

  /* Medium devices (tablets, less than 992px)*/
  @media (max-width: 991.98px){
    flex-direction: ${({ reverse }) => reverse ? 'column-reverse' : 'column'};
  }

  .content-main{
    margin-right: ${({ reverse }) => reverse ? '0' : '6rem'};
    margin-left: ${({ reverse }) => reverse ? '6rem' : '0'};;

  /* Medium devices (tablets, less than 992px)*/
  @media (max-width: 991.98px){
    margin: 0;
  }

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
          color: ${({ theme }) => theme.colors.background};
          background-color: ${({ theme }) => theme.colors.secondary.main};
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
            color: ${({ theme }) => theme.colors.secondary.main}
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
          color: ${({ theme }) => theme.colors.gray[200]};

            h6{
              display: inline;
              font-size: 14px;
              font-weight: 700;
              color: ${({ theme }) => theme.colors.secondary.main};
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

      /* X-Small devices (portrait phones, less than 576px)*/
      @media (max-width: 575.98px){
        zoom: 0.55;
        margin-top: 2rem;
      }

      /* Small devices (landscape phones, less than 768px)*/
      @media (min-width: 576px) and (max-width: 767.98px){
        margin-top: 2rem;
        zoom: 0.7;
      }

      /* Medium devices (tablets, less than 992px)*/
      @media (min-width: 768px) and (max-width: 991.98px){
        margin-top: 2rem;
        zoom: 0.7;
      }

      /* Large devices (desktops, less than 1200px)*/
      @media (min-width: 992px) and (max-width: 1199.98px){
        margin-top: 2rem;
        zoom: 0.8;
      }
    }

  }

  .img-hero2{

    /* X-Small devices (portrait phones, less than 576px)*/
    @media (max-width: 575.98px){
      zoom: 0.6;
    }

    /* Small devices (landscape phones, less than 768px)*/
    @media (min-width: 576px) and (max-width: 767.98px){
      zoom: 0.7;
    }

    /* Medium devices (tablets, less than 992px)*/
    @media (min-width: 768px) and (max-width: 991.98px){
      zoom: 0.7;
    }

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
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;

      @media (max-width: 575.98px){
        display: none;
        margin-top: 0;
      }
    }

    >div{
      display: flex;
      justify-content: center;
      margin-top: 1rem;

       /* X-Small devices (portrait phones, less than 576px)*/
       @media (max-width: 575.98px){
          display: none;
          margin-top: 0;
        }
  
      button{
        margin-right: 2rem;
      }
    }

    img{

      /* X-Small devices (portrait phones, less than 576px)*/
      @media (max-width: 575.98px){
        zoom: 0.7;
        margin-bottom: 2rem;
      }

      /* Small devices (landscape phones, less than 768px)*/
      @media (min-width: 576px) and (max-width: 767.98px) {
        zoom: 0.75;
      }
       /* Large devices (desktops, less than 1200px)*/
       @media (min-width: 992px) and (max-width: 1199.98px){
        zoom: 0.8;
      }
    }
    
  }

  .section-3{
    margin-top: -5rem;
    
      /* Small devices (landscape phones, less than 768px)*/
      @media (max-width: 767.98px) {
        margin-top: 0;
        margin-bottom: 2rem;
      }

      /* Medium devices (tablets, less than 992px)*/
      @media (min-width: 768px) and (max-width: 991.98px){
        margin-top: 0;
        margin-bottom: 2rem;
      }
  }

  .img-section5{
    width: 500px;
    height: 300px;

    /* X-Small devices (portrait phones, less than 576px)*/
    @media (max-width: 575.98px){
      zoom: 0.7;
      margin-bottom: 2rem;
    }

    /* Small devices (landscape phones, less than 768px)*/
    @media (min-width: 576px) and (max-width: 767.98px) {
      zoom: 0.8;
      margin-bottom: 2rem;
    }

    @media (min-width: 768px) and (max-width: 991.98px){
      zoom: 0.8;
      margin-bottom: 2rem;
    }

    /* Large devices (desktops, less than 1200px)*/
    @media (min-width: 992px) and (max-width: 1199.98px){
        margin-bottom: 2rem;
        zoom: 0.8;
    }
  }

  .img-section4{
    img{

      /* X-Small devices (portrait phones, less than 576px)*/
      @media (max-width: 575.98px){
        zoom: 0.6;
      }

      /* Small devices (landscape phones, less than 768px)*/
      @media (min-width: 576px) and (max-width: 767.98px) {
        zoom: 0.8;
      }

      @media (min-width: 768px) and (max-width: 991.98px){
        zoom: 0.8;
      }

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

    /* Medium devices (tablets, less than 992px)*/
    @media (max-width: 991.98px){
      padding: 2rem;
      height: auto;
      flex-direction: column;
    }
`