import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import Experience from "../Experience";
import HomeBanner from "../HomeBanner";
import MyServices from "../MyServices";
import SmoothScroll from "../SmoothScroll";

const Home = () => {
  const { navRight } = useContext(AppContext);
  return (
    <Container id="my-scrollbar" className="container" style={{overflow: `${navRight ? "hidden" :  "auto"}`}}>
     <SmoothScroll data = {`my-scrollbar`}/>
      <HomeBanner />
      <Experience />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
      <MyServices />
    </Container>
  );
};

export default Home;

const Container = styled.div`
/* background: #000; */

`;
