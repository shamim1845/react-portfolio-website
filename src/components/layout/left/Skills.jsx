import React from "react";
import styled from "styled-components";
import AdditionalSkills from "./AdditionalSkills";
import LanguageSkills from "./LanguageSkills";
import ProfileInfo from "./ProfileInfo";
import ProgrammingSkills from "./ProgrammingSkills";

const Skills = () => {
  return (
    <Container>
      <Wrapper >
        <ProfileInfo />
        <LanguageSkills />
        <ProgrammingSkills />
        <AdditionalSkills />
    
      </Wrapper>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

`;

const Wrapper = styled.div`

    padding: 28rem 3rem 7rem 3rem ;
    @media (max-width: 920px) {
        padding-bottom: 11rem;
    padding-top: 21rem;
}
`
