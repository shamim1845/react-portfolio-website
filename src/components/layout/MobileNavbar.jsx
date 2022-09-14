import React from 'react'
import styled from 'styled-components';
import HamburgerMenu from '../HamburgerMenu';
import {BsThreeDotsVertical} from 'react-icons/bs'
import { useContext } from 'react';
import { AppContext } from '../../App';


const MobileNavbar = () => {
 const {navLeft, setNavLeft, navRight, setNavRight} =  useContext(AppContext)
  
  return (
    <Container>
        <div className="left_side_menu" onClick={() => {setNavLeft(!navLeft); setNavRight(false)}}>
            <BsThreeDotsVertical />
        </div>
        <div className="right_side_menu" onClick={() => {setNavRight(!navRight); setNavLeft(false)}}>
            <HamburgerMenu open={navRight} />
        </div>
    </Container>
  )
}

export default MobileNavbar;

const Container = styled.div`
background-color: ${({theme}) => theme.bg2};
    width: 100%;
    height: 7rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    @media(min-width: 921px) {
    display:none;
  }

  .left_side_menu{
color: #8c8c8e;
cursor: pointer;
font-size: 2rem;
font-weight: 900;
transition: all 0.5s ease-in-out;
&:hover{
    color: ${({theme}) => theme.lightColor};
}
  }

  .right_side_menu{

  }
`