import React from "react";
import styled from "styled-components";
import AutoWriting from "./AutoWriting";
import Button from "./Button";

const HomeBanner = () => {
  return (
    <Container>
      <div className="shadow"></div>
      <div className="wrapper">
        <h1>
          Discover my Amazing <br /> Art Space!
        </h1>

        <AutoWriting />

        <Button>explore now</Button>
      </div>
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  width: 100%;
  
  margin-top: 3rem;
  color: ${({ theme }) => theme.lightColor};
  position: relative;

  @media (max-width: 920px) {
    align-items: center;
    margin-top: 0rem;
  }
  .shadow {
    width: 100%;
    height: 3rem;
    z-index: -1;
    transform: scale(0.9);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: rgba(30, 30, 40, 0.88);

    @media (max-width: 1100px) {
      display: none;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    z-index: 2;
    position: absolute;
    padding: 5rem;
    width: 100%;
   height: 35rem;

   @media (max-width: 385px) {
      padding: 2rem;
      }

    h1 {
      line-height: 5rem;
      text-align: start;
      font-size: 5rem;
      @media (max-width: 1100px) {
        font-size: 4.5rem;
      }
      @media (max-width: 920px) {
        font-size: 4.5rem;
      }
      @media (max-width: 600px) {
        font-size: 4.5rem;
      }
      @media (max-width: 385px) {
        font-size: 3.5rem;
      }
      @media (max-width: 353px) {
        font-size: 3rem;
      }
    }

    position: relative;

    &::after {
      content: "";
      width: 100%;
      /* height: calc(100% - 3rem); */
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("https://images.pexels.com/photos/80454/tree-desert-namibia-dead-vlei-80454.jpeg?auto=compress&cs=tinysrgb&w=600");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      opacity: 0.17;
      z-index: -5;
    }
  }
`;
