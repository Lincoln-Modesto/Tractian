import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 3rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  >div{
    margin-right: 6rem;

    ul{
      list-style: none;

      li{
        display: flex;
        margin-top: 3rem;
        align-items: center;

        div{
          padding: 0.5rem;
          margin-right: 1rem;
          border-radius: 5px;
          box-shadow: 0px 4px 4px 0px #00000040;

          display: flex;
          justify-content: center;
          align-items: center;
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
      }
    }
  }

  .img-hero{
    margin: 3rem 0;

    img{
      width: 700px;
      height: 390px;
    }

  }
`