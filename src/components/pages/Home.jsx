import React from "react";
import styled from "styled-components";
import Experience from "../Experience";
import HomeBanner from "../HomeBanner";
import MyServices from "../MyServices";

const Home = () => {
  return (
    <Container className="container">
      <HomeBanner />
      <Experience />
      <MyServices />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
