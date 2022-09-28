import React from "react";
import styled from "styled-components";
import SmoothScroll from "../../SmoothScroll";
import AdditionalSkills from "./AdditionalSkills";
import LanguageSkills from "./LanguageSkills";
import ProfileInfo from "./ProfileInfo";
import ProgrammingSkills from "./ProgrammingSkills";

const Skills = () => {
  return (
    <Container id="left-side-scrollbar" >
      <SmoothScroll data = {"left-side-scrollbar"}/>
      <Wrapper>
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
 position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-track{
  width: 1px;
  background-color: ${({theme}) => theme.bg2};
}
.scrollbar-thumb{
  width: 1px;
  background-color: ${({theme}) => theme.orangeColor};
}
`;

const Wrapper = styled.div`
  padding: 25rem 3rem 12rem 3rem;
  @media (max-width: 920px) {
    padding-bottom: 10rem;
    padding-top: 23rem;
  }
`;
