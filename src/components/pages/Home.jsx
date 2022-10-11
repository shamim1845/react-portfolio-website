import React from "react";
import styled from "styled-components";
import AboutMe from "../AboutMe";
import HomeBanner from "../HomeBanner";
import MyProjects from "../MyProjects";

const Home = () => {

  return (
    <Container  className="container" >

      <HomeBanner />


      <AboutMe />
  
      <MyProjects />
    
     
    </Container>
  );
};

export default Home;

const Container = styled.div`


`;
