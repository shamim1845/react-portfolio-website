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
        font-size: 1.7rem;
    }
    h5{
        font-size: 1.4rem;
    }
    h6,p{
        font-size: 1.2rem;
    }
  
    a{
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1px;
        transition: 0.4s ease-in-out;
        text-transform: uppercase;
    }

  
.divider{
    margin: 1.5rem 0;
    background: #646466;
    width: 100%;
    height: 1px;
    opacity: 0.3;
}
 
.container{
    width: 100%;
    height: 100%;
    padding: 0 3.5rem 5rem 2.5rem;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 920px) {
    padding:0 0rem 10rem 0;
    }
}

    .move_left{
        transform: translateX(-13rem);
        opacity: 0.4;
        transition: all 0.55s ease-in-out;
        
        @media (max-width: 920px) {
    transform: translateX(0rem);
    
  }
    }
    .move_right{
             transform: translateX(10rem)
    }




    
    .rightSidebarMove{
             max-width: 21rem;
             transition: all 0.55s ease-in-out;
             @media (max-width: 920px) {
                transition: all 0.7s ease-in-out;
    
  }
    }
    .rightSidebarReset{
    
        max-width: 8rem;
        @media (max-width: 920px) {
        max-width: 0rem;
   
    }
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
