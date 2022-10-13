import React from "react";
import styled from "styled-components";
import HorizontalProgressBar from "../../HorizontalProgressBar";
import Technology from "../../Technology";

const ProgrammingSkills = () => {
  return (
    <>
      <Container>
        {/* <HorizontalProgressBar tech={"HTML"} percent={70} delay={20} />
        <HorizontalProgressBar tech={"CSS"} percent={60} delay={20} />
        <HorizontalProgressBar tech={"JavaScript"} percent={65} delay={20} />
        <HorizontalProgressBar tech={"React"} percent={60} delay={20} /> */}
   

   <Technology tech={"HTML"} />
   <Technology tech={"CSS"} />
   <Technology tech={"JavaScript"} />
   <Technology tech={"React"} />
 
         </Container>
      <div className="divider"></div>
    </>
  );
};

export default ProgrammingSkills;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.2rem;

`;
