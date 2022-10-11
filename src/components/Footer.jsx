import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <div className="left">© Copyright  {new Date().getFullYear()}. Made by <span> <Link to={'/'}>Shamim</Link> </span></div>
    </Container>
  )
}

export default Footer;

const Container = styled.footer`
    margin: 3rem 10rem 0rem 2rem;
    padding: 1.7rem 3rem;
    font-size: 1.1rem;
    background: ${({theme}) => theme.grayBg};
    color: ${({theme}) => theme.grayColor};
 

    @media (max-width: 920px) {
        margin: 0rem 1rem 2rem 1rem;
           
    }
    @media (max-width: 385px) {
     
        text-align: center;
        
    }

    div{
      span{
        a{

          color: ${({theme}) => theme.lightColor};
          text-decoration: underline;
          &:hover{
            color: ${({theme}) => theme.orangeColor};
          }
        }
      }
    }
`