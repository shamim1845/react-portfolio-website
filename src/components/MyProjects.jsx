import React from "react";
import styled from "styled-components";
import { PortfolioData } from "../assets/Data";
import ContentHeaderInfo from "./ContentHeaderInfo";
import ProjectsCard from "./ProjectsCard";

const MyProjects = () => {
  return (
    <Container>

          <ContentHeaderInfo 
      title='PROJECTS'
      desc=' 
      Here, you will find some of the projects that I created with each project containing its own case study.
      '
      />
      <div className="projects">
      {PortfolioData.map((card) => {
        return <ProjectsCard key={card.id} card={card} />;
      })}
      </div>
    </Container>
  );
};

export default MyProjects;

const Container = styled.div`


.projects{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 3rem;

  @media (max-width: 920px) {

  }

}
`;
