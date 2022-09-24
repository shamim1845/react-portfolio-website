import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../App";
import BottomBar from "./BottomBar";
import Profile from "./Profile";
import Skills from "./Skills";

const LeftSideBar = () => {
  const { navLeft } = useContext(AppContext);

  return (
    <Container
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
  background: ${({ theme }) => theme.bg2};

  z-index: 999;
  overflow-x: hidden;
  min-width: 31rem;
  height: 100%;
  transition: all 0.7s ease-in-out;
  color: ${({ theme }) => theme.grayColor};

  @media (max-width: 920px) {
    position: absolute;
    top: 0;
  }
`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
