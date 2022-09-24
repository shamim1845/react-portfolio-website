import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <Container>
      <div className="card">
        <div>
          <span>10</span> <span>+</span>
        </div>
        <h6>Years Experience</h6>
      </div>
      <div className="card">
        <div>
          <span>5</span>
        </div>
        <h6>Completed Projects</h6>
      </div>
      <div className="card">
        <div>
          <span>5</span>
        </div>
        <h6>Happy Customers</h6>
      </div>
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3rem 0;

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    div {
      color: ${({ theme }) => theme.orangeColor};
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      font-size: 2.2rem;
    }
    h6 {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.lightColor};
    }
  }
`;
