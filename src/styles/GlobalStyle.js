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
        
    }
    body{
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.gray[900]};
        box-sizing: content-box;
        overflow-x: hidden;

        /* X-Small devices (portrait phones, less than 576px)*/
        @media (max-width: 575.98px){
            background-color: cyan;
        }

        /* Medium devices (tablets, less than 992px)*/
        @media (min-width: 768px) and (max-width: 991.98px){
            background-color: red;
        }

        /* Large devices (desktops, less than 1200px)*/
        @media (min-width: 992px) and (max-width: 1199.98px){
            background-color: green;
        }

    }
    button{
        cursor: pointer;
    }
  
    section{
        overflow-x: hidden;
    }
`