import React, { useContext, useState } from "react";
import styled from "styled-components";


import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import History from "../../pages/History";
import Contact from "../../pages/Contact";
import Blog from "../../pages/Blog";
import Error from "../../pages/Error";
import { AppContext } from "../../../App";

const MainArea = () => {

 const {navRight} = useContext(AppContext);

  return (
 
      <Container >
        <Content >
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


  @media (min-width: 920px) {
    padding-left: 31rem;
  padding-right: 8rem;
  }

  
`;
const Content = styled.div`
overflow-y: auto;
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  margin: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; 
&::-webkit-scrollbar {
    display: none;
}


  background-image: url("https://images.unsplash.com/photo-1647815162178-49b00f231b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2MHxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  
  
`;
