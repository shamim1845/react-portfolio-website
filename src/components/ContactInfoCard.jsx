import React from "react";
import styled from "styled-components";

const ContactInfoCard = ({ card }) => {
  const key = Object.keys(card);
  const values = Object.values(card);
  return (
    <Container>
      <ul>
        <li>
          <h6>{key[0]}</h6>
          <span className="value">{values[0]}</span>
        </li>
        <li>
          <h6>{key[1]}</h6>
          <span className="value">{values[1]}</span>
        </li>
        <li>
          <h6>{key[2]}</h6>
          <span className="value">{values[2]}</span>
        </li>
      </ul>
    </Container>
  );
};

export default ContactInfoCard;

const Container = styled.div`
  background: ${({ theme }) => theme.grayBg};
  height: auto;
  padding: 3rem;

  ul {
    li {
      display: flex;
      justify-content: space-between;
      color: ${({ theme }) => theme.lightColor};
      font-size: 1.2rem;
      padding: 0.3rem 0;
      h6 {
        font-weight: 500;
        text-transform: capitalize;
      }
      .value {
        color: ${({ theme }) => theme.grayColor};
      }
    }
  }
`;
