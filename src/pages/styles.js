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

    ul{
      list-style: none;

      li{
        display: flex;
        margin-top: 3rem;
        align-items: center;

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
          img{
            margin-right: 1rem;
          }

          color: ${({theme}) => theme.colors.secondary.main};
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;

          :hover{
            text-decoration: underline;
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
    
  }

  .section-3{
    margin-top: -5rem;
  }
`