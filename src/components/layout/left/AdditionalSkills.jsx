import React from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import cv from "../../../assets/cv.txt"


const AdditionalSkills = () => {
  return (
    <Container>
      <div className="additional_skills">
        <ul>
          <li>
            <BsCheckLg size={9} /> <span>Bootstrap, Material-UI</span>{" "}
          </li>
          <li>
            <BsCheckLg size={9} /> <span>Sass, Styled-Components</span>{" "}
          </li>
          <li>
            <BsCheckLg size={9} /> <span>Git, Github knowledge</span>{" "}
          </li>
          <li>
            <BsCheckLg size={9} /> <span> Rest API</span>{" "}
          </li>
        </ul>
      </div>
      <div className="divider"></div>

      <div className="cv_container">
        <a href={cv} download >
          DOWNLOAD CV <MdDownload size={15} />
        </a>
      </div>
   
    </Container>
  );
};

export default AdditionalSkills;

const Container = styled.div`
  .additional_skills {
    ul {
      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.grayColor};
        line-height: 2rem;
        font-weight: 300;
        padding: 0.2rem 0;

        svg {
          color: ${({ theme }) => theme.orangeColor};
        }
      }
    }
  }

  .cv_container {
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      color: ${({theme}) => theme.grayColor};
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
           transition: 0.4s ease-in-out;

      &:hover{
        color: ${({theme}) => theme.lightColor};
      }
    }
  }
`;
