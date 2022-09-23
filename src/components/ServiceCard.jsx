import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsChevronRight } from "react-icons/bs";

const ServiceCard = () => {
  return (
    <Container>
        <h5>Web Development</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores praesentium magni, reiciendis quae, maxime non ut distinctio fuga, sit commodi voluptatem nostrum non neque. Libero?</p>
        <div className="link">
            <Link to={"/"}>ORDER NOW</Link> <BsChevronRight />
        </div>
    </Container>
  )
}

export default ServiceCard;

const Container = styled.div`
    background: ${({theme}) => theme.grayBg};
     height: auto;
     padding: 2rem;
    
   h5{
    color:  ${({theme}) => theme.lightColor};
    padding-bottom: 1rem;
   }

   p{
    color:  ${({theme}) => theme.grayColor};
    padding-bottom: 1rem;
   }

   .link{
    color:  ${({theme}) => theme.orangeColor};
        a{
            color:  ${({theme}) => theme.orangeColor};
        }
   }

`