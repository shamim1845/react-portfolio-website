import React from "react";
import styled from "styled-components";
import HorizontalProgressBar from "../../HorizontalProgressBar";

const ProgrammingSkills = () => {
  return (<>
 
    <Container>
   <HorizontalProgressBar tech={'HTML'} percent={70} />
   <HorizontalProgressBar tech={'CSS'} percent={60} />
   <HorizontalProgressBar tech={'JavaScript'} percent={70} />
   <HorizontalProgressBar tech={'React'} percent={90} />
    </Container>
    <hr />
    </>
  );
};

export default ProgrammingSkills;

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
  
`;
