import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        /* font-family: 'Open Sans', sans-serif; */
        /* font-family: 'Outfit', sans-serif; */
        
       -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
        display: none;
             }
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
        overflow: hidden;
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
    margin: 2rem 0;
    background: #646466;
    width: 100%;
    height: 1px;
    opacity: 0.3;
}
.divider_orange{
    background-color: ${({ theme }) => theme.orangeColor};
    width: 5rem;
    height: .5rem;
  border-radius: 0.5rem;
    margin: 1rem auto;
}
 
.container{
    width: 100%;
    height: 100%;
    padding: 0 10rem 0 2rem ;

    @media (max-width: 920px) {
    height: auto;
    padding:0 1rem 5rem 1rem;

    
.scrollbar-track{
    width: 2px;
    background-color: ${({ theme }) => theme.bg2};
}
.scrollbar-thumb{
    width: 2px;
    background-color: ${({ theme }) => theme.orangeColor};
}
    }
}

    .content_move_left{
        transform: translateX(-13rem);
        opacity: 0.5;
        transition: all 0.55s ease-in-out;
        
        @media (max-width: 920px) {
          transform: translateX(0rem);
    
         }
    }

    .content_move_right{
              transition: all 0.55s ease-in-out;
             transform: translateX(0rem)
    }




    
    .rightSidebarMove{
             right: 0rem;
             transition: all 0.55s ease-in-out;
             @media (max-width: 920px) {
                transition: all 0.7s ease-in-out;
    
  }
    }
    .rightSidebarReset{
        transition: all 0.55s ease-in-out;
        right: -13rem;
        @media (max-width: 920px) {
        right: -22rem;
   
    }
    }






    .leftSidebarMove{
        left: 0rem;
        @media (max-width: 920px) {
    left: -32rem;
    
}
     
    }
    .leftSidebarReset{
        left: 0rem;

    }

 
`;

export default GlobalStyle;
