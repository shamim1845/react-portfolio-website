import React from "react";
import styled from "styled-components";
import HorizontalProgressBar from "../../HorizontalProgressBar";

const ProgrammingSkills = () => {
  return (
    <>
      <Container>
        <HorizontalProgressBar tech={"HTML"} percent={70} delay={20} />
        <HorizontalProgressBar tech={"CSS"} percent={60} delay={20} />
        <HorizontalProgressBar tech={"JavaScript"} percent={65} delay={20} />
        <HorizontalProgressBar tech={"React"} percent={70} delay={20} />
      </Container>
      <div className="divider"></div>
    </>
  );
};

export default ProgrammingSkills;

const Container = styled.div`
  width: 100%;

`;
