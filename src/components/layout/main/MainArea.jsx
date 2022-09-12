import React, { useState } from "react";
import styled from "styled-components";

import RightSidebar from "../right/RightSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import History from "../../pages/History";
import Contact from "../../pages/Contact";
import Blog from "../../pages/Blog";
import Error from "../../pages/Error";

const MainArea = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <Container>
        <Content className={`${open ? "move" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Content>

        <RightSidebar open={open} setOpen={setOpen} />
      </Container>
    </BrowserRouter>
  );
};

export default MainArea;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  margin: auto;

  background-image: url("https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
`;
