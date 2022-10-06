import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../../../App";
import BottomBar from "./BottomBar";
import Profile from "./Profile";
import Skills from "./Skills";

const LeftSideBar = () => {
  const { navLeft, setNavLeft } = useContext(AppContext);

  const LeftSidebarRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!LeftSidebarRef.current.contains(e.target)) {
        setNavLeft(false);
      }
    });
  }, []);


  return (
    <Container
      ref={LeftSidebarRef}
      className={`${navLeft ? "leftSidebarReset" : "leftSidebarMove"}`}
    >
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
  overflow: hidden;
  background: ${({ theme }) => theme.bg2};
  z-index: 1000;
  height: 100%;
  min-width: 31rem;
  color: ${({ theme }) => theme.grayColor};
  transition: all 0.7s ease-in-out;
  @media (max-width: 920px) {
    position: fixed;
    top: 0;
  }
  `;
const Wrapper = styled.div`
position: relative;
  height: 100%;
  width: 100%;
`;
