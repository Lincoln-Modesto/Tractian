import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        
    }
    html{
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    body{
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.gray[900]};
        box-sizing: content-box;
        overflow-x: hidden;
    }
    button{
        cursor: pointer;
    }
  
    section{
        overflow-x: hidden;
    }
`