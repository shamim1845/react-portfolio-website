import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PortfolioData } from "../assets/Data";
import Button from "./Button";
import Technology from "./Technology";
import { BsGithub } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const ProjectDetails = () => {
  const { id } = useParams();
  const data = PortfolioData[id - 1];


  return (
    <Container className="container">
      <header>
        <h1>{data.title}</h1>
        <h5>{data.desc}</h5>
       <a href={data.link.live} target= "_blank"><Button>Live Link</Button></a> 
      </header>

      <div className="img_container">
        <img src={data.img} alt="project img" />
      </div>
      <Overview>
        <div className="overview">
          <h3>Project Overview</h3>
          <h6>{data.overview}</h6>
        </div>

        <div className="tools">
          <h3>Tools Used</h3>
          <div>
            {data.tools.map((tech) => (
              <Technology key={tech} tech={tech} />
            ))}
          </div>
        </div>
        <div className="live">
          <h3>See Live</h3>
          <div>
          <a href={data.link.live} target= "_blank"><Button>  Live Link <FiSend /></Button></a> 
          <a href={data.link.github} target= "_blank"><Button>  GitHub <BsGithub /></Button></a> 
           </div>
        </div>
      </Overview>
    </Container>
  );
};

export default ProjectDetails;

const Container = styled.div`
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    h1 {
      text-align: center;
      color: ${({ theme }) => theme.lightColor};
    }
    h5 {
      max-width: 60rem;
      min-height: 7rem;
      margin-top: 1rem;
      text-align: center;
      color: ${({ theme }) => theme.grayColor};
    }
  }

  .img_container {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-content: center;

    img {
      width: 100%;
      max-width: 70rem;
    }
  }
`;

const Overview = styled.div`
  background: ${({ theme }) => theme.grayBg};
  padding: 3rem;
  margin-top: 5rem;
  color: ${({ theme }) => theme.lightColor};
  .overview {
    h3 {
      padding: 1rem 0;
    }

    h6 {
      color: ${({ theme }) => theme.grayColor};
      line-height: 1.7;
    }
  }

  .tools {
    margin-top: 5rem;
    h3 {
      padding: 1rem 0;
    }
    div {
      max-width: 50rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
    }
  }

  .live {
    margin-top: 5rem;
    h3 {
      padding: 1rem 0;
    }
    div {
      display: flex;
      gap: 1.2rem;
    }
  }
`;
