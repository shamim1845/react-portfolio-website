import React from 'react';

import styled from 'styled-components';
import {FaLinkedinIn, FaFacebookF} from "react-icons/fa"
import {AiOutlineGithub, AiOutlineTwitter} from "react-icons/ai"

const BottomBar = () => {
  return (
    <Container>
      <div className="wrapper">
      
          <a href='https://www.facebook.com/' target="_blank"><FaLinkedinIn /></a>
          <a href='https://www.facebook.com/' target="_blank"><AiOutlineGithub /></a>
          <a href='https://www.facebook.com/' target="_blank"><AiOutlineTwitter /></a>
          <a href='https://www.facebook.com/' target="_blank"><FaFacebookF /></a>
      
      </div>
    </Container>
  )
}

export default BottomBar;

const Container = styled.div`
      width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.bg1};
  position: absolute;
  bottom: 0rem;
  left: 0;
@media (max-width: 920px) {
  bottom: 5.5rem;
}

.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
   font-size: 1.2rem;
 a{
  color: #8c8c8e;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: ${({ theme }) => theme.lightColor};
  }
 }
}
 
`