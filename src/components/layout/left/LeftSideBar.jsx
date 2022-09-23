
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../../App";
import BottomBar from "./BottomBar";
import Profile from "./Profile";
import Skills from "./Skills";

const LeftSideBar = () => {
 const {navLeft} = useContext(AppContext);
 
  return (
    <Container  className={`${navLeft ? "leftSidebarReset" : "leftSidebarMove" }`}>
      <Wrapper>
        <Profile />
      <Skills />
        <BottomBar />
      </Wrapper>
    </Container>
  );
};

export default LeftSideBar;

const Container = styled.div`
  background: ${({ theme }) => theme.bg2};
z-index:999;
  overflow-x: hidden;
 width: 31rem;
  height: 100%;
  transition: all .7s ease-in-out;
  color: ${({theme}) => theme.grayColor};
  position: absolute;
  top: 0;
  left: 0;

@media (max-width: 920px) {
  // left: -31rem;
    
}

`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
 
`;
