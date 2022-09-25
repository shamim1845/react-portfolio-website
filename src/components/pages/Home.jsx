import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import Experience from "../Experience";
import HomeBanner from "../HomeBanner";
import MyServices from "../MyServices";

const Home = () => {
  const { navRight } = useContext(AppContext);
  return (
    <Container className="container" style={{overflow: `${navRight ? "hidden" :  "auto"}`}}>
      <HomeBanner />
      <Experience />
      <MyServices />
    </Container>
  );
};

export default Home;

const Container = styled.div`
/* overflow: hidden; */
`;
