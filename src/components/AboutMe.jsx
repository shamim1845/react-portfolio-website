import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import ContentHeaderInfo from "./ContentHeaderInfo";
import Technology from "./Technology";

const AboutMe = () => {
  return (
    <Container>
      <ContentHeaderInfo
        title="ABOUT ME"
        desc="   Here, you will find more information about me. what I do and my current
      skills mostly in terms of programming and technology."
      />

      <div className="content">
        <div className="content_left">
          <h4>Get to know me!</h4>
          <p>
            I'm a Front-End Web Developer, also focused on MERN Stack
            development. I am a student by profession and a self-taught
            programmer by passion. I love to build the interface of Websites and
            Web Applications that lead to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <br />
          <p>
            I also like sharing content related to the stuff I have learned in
            Web Development over the years. So it can help other people in the
            Dev. Community. Feel free to Connect or Follow me on my Linkedin,
            where I post helpful content related to Web Development and
            Programming.
          </p>

          <div className="btn_container">
            <Link to="/contact">
              {" "}
              <Button>CONTACT</Button>
            </Link>
          </div>
        </div>

        <div className="content_right">
          <h4>My Skills</h4>

          <div className="skills">
            <Technology tech={"HTML"} />
            <Technology tech={"CSS"} />
            <Technology tech={"JavaScript"} />
            <Technology tech={"React"} />
            <Technology tech={"GIT"} />
            <Technology tech={"Github"} />
            <Technology tech={"Responsive Design"} />
            <Technology tech={"Node(Basic)"} />
            <Technology tech={"Express(Basic)"} />
            <Technology tech={"MongoDb(Basic)"} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  .content {
    background: ${({ theme }) => theme.grayBg};
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    /* margin-top: 5rem; */

    @media (max-width: 1150px) {
      flex-direction: column;
    }
    @media (max-width: 920px) {
      flex-direction: row;
    }
    @media (max-width: 650px) {
      flex-direction: column;
    }

    .content_left {
      display: flex;
      flex-direction: column;
      flex: 1;

      h4 {
        color: ${({ theme }) => theme.lightColor};
        margin-bottom: 2rem;
      }
      p {
        color: ${({ theme }) => theme.grayColor};
      }
      .btn_container {
        margin-top: 3rem;
        @media (max-width: 650px) {
          margin-top: 3rem;
        }
      }
    }
    .content_right {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    h4 {
      color: ${({ theme }) => theme.lightColor};
      margin-bottom: 2rem;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;

      .skill {
        background: ${({ theme }) => theme.bg1};
        padding: 1.2rem 2.4rem;
        border-radius: 0.5rem;
        font-size: 1.3rem;
        font-weight: 500;
        color: ${({ theme }) => theme.orangeColor};
      }
    }
  }
`;
