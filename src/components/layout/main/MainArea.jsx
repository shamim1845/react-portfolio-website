import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import History from "../../pages/History";
import Contact from "../../pages/Contact";
import Blog from "../../pages/Blog";
import Error from "../../pages/Error";
import { useContext } from "react";
import { AppContext } from "../../../App";
import SmoothScroll from "../../SmoothScroll";
import UseWindowSize from "../../Hooks/UseWindowSize";
import Footer from "../../Footer";


const MainArea = () => {
  const { navRight, setNavLeft, setNavRight } = useContext(AppContext);
const [width] = UseWindowSize();

const navBarHandler = () => {
  setNavLeft(false)
  setNavRight(false)
}


  return (
    <Container onScroll={() => navBarHandler()}  id="my-scrollbar"  className={`${navRight ? "content_move_left" : "content_move_right"}`}>
      <ScroolContainer>
        {
          width> 920 && <SmoothScroll data = {`my-scrollbar`}/> 
        }
     
      </ScroolContainer>
      <Content  
       >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
          <Footer />
      </Content>
    </Container>
  );
};

export default MainArea;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
      


  @media (max-width: 920px) {
    overflow-y: auto;
    height: 100vh;
  }
  @media (min-width: 921px) {
    &::before {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.pexels.com/photos/2083842/pexels-photo-2083842.jpeg?auto=compress&cs=tinysrgb&w=600");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: -5;
  }
  }

`;
const ScroolContainer = styled.div`

`
const Content = styled.div`
  width: 100%;
  height: 100%;


  @media (max-width: 920px) {

    margin-top: 7rem;
    padding-bottom: 7rem;
  
  }


`;
