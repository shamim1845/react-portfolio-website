import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import History from "../../pages/History";
import Contact from "../../pages/Contact";
import Blog from "../../pages/Blog";
import Error from "../../pages/Error";

const MainArea = () => {
  return (
    <Container>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Content>
    </Container>
  );
};

export default MainArea;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 921px) {
  }
`;
const Content = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  margin: auto;

  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
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
`;
