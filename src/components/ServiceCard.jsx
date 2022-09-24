import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";

const ServiceCard = ({card}) => {
  return (
    <Container>
      <h5>{card.title}</h5>
      <p>
     {card.desc}
      </p>
      <div className="link">
        <Link to={card.link}>ORDER NOW</Link> <BsChevronRight />
      </div>
    </Container>
  );
};

export default ServiceCard;

const Container = styled.div`
  background: ${({ theme }) => theme.grayBg};
  height: auto;
  padding: 3rem;

  h5 {
    color: ${({ theme }) => theme.lightColor};
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.grayColor};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.5px;
  }

  .link {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.orangeColor};

    a {
      color: ${({ theme }) => theme.orangeColor};
      margin-right: 0.5rem;
 
    }
    svg {
      margin-top: -0.3rem;
      font-size: 1rem;
      transition:  0.4s ease-in-out;
    }
    &:hover svg {
      transition:  0.4s ease-in-out;
      transform: translateX(5px);
    }
  }
`;
