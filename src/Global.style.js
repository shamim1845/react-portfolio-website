import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Open Sans', sans-serif; */
        font-family: 'Poppins', sans-serif;
        overflow: hidden;
    }

    html{
        font-size: 62.5%;
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

    .move{
        overflow: hidden;
opacity: 0.5;
      transform: translateX(-10rem)
    }


 
`;

export default GlobalStyle;
