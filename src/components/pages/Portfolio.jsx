import React from "react";
import styled from "styled-components";
import MyProjects from "../MyProjects";

const Portfolio = () => {
 
  return (
    <Container className="container">

   <MyProjects />
    </Container>
  );
};

export default Portfolio;
const Container = styled.div`
margin-top: -5rem;

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.lightColor};
  }
  h5 {
    max-width: 60rem;
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.grayColor};
  }


`;
