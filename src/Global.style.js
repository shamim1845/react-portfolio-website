import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Open Sans', sans-serif; */
        font-family: 'Poppins', sans-serif;
        /* font-family: 'Outfit', sans-serif; */
        overflow: hidden;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        background: #191923;
       
    }

    h1{
        font-size: 4rem;
    }
    h2{
        font-size: 3rem;
    }
    h3{
        font-size: 2.5rem;
    }
    h4{
        font-size: 2rem;
    }
    h5{
        font-size: 1.4rem;
    }
    h6,p{
        font-size: 1.2rem;
    }
  
    a{
        text-decoration: none;
    }

    hr{
        margin: 1.5rem 0;
        background: #646466;
    width: 100%;
    height: 1px;
    opacity: 0.3;
    }
.divider{
    margin: 1.5rem 0;
    background: #646466;
    width: 100%;
    height: 1px;
    opacity: 0.3;
}
 

    .move_left{
        transform: translateX(-10rem)
    }
    .move_right{
             transform: translateX(10rem)
    }
    
    .rightSidebarMove{
        right: -12rem;
        @media (max-width: 920px) {
    right: -20rem;
    
    }
    }
    .rightSidebarReset{
     right: 0rem;
    }

    .leftSidebarMove{
        left: 0rem;
        @media (max-width: 920px) {
    left: -31rem;
    
}
     
    }
    .leftSidebarReset{
        left: 0rem;

    }

 
`;

export default GlobalStyle;
