import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaExpand } from "react-icons/fa";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import Fancybox from "./FancyBox";

const ProjectsCard = ({ card }) => {
 


  return (
    <Container>
      <CardTop>
        <Fancybox options={{ infinite: false }}>
          <div
            data-fancybox="gallery"
            data-src={card.img}
          >
            <FancyExpand>
              <FaExpand size={12} />
            </FancyExpand>
            <img
              src={card.img}
              alt="project image"
            />
          </div>
        </Fancybox>
      </CardTop>

      <CardBottom>
        <h5>{card.title}</h5>
        <p>{card.desc}</p>
        <div className="link">
          <Link to={`/portfolio/${card.id}`}>Read More</Link> <BsChevronRight />
        </div>
      </CardBottom>
    </Container>
  );
};

export default ProjectsCard;

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardTop = styled.div`
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(85%) blur(0);
    transition: 0.55s ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
    filter: brightness(100%) blur(0);
  }
`;

const FancyExpand = styled.div`
  background: ${({ theme }) => theme.bg2};
  position: absolute;
  top: 3rem;
  left: 3rem;
  opacity: 0.5;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in-out;
  ${CardTop}:hover & {
    opacity: 0.5;
    z-index: 100;
  }

  &:hover {
    scale: 1.1;
    opacity: 1 !important;
  }
  svg {
    color: ${({ theme }) => theme.lightColor};
  }
`;

const CardBottom = styled.div`
  background: ${({ theme }) => theme.grayBg};
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  padding: 2rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: 0.55s ease-in-out;
  transform: translateY(100%);

  ${Container}:hover & {
    transform: translateY(0%);
  }

  h5 {
    color: ${({ theme }) => theme.lightColor};
    margin-bottom: 1.5rem;
    text-align: left;
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
      transition: 0.4s ease-in-out;
    }
    &:hover svg {
      transition: 0.4s ease-in-out;
      transform: translateX(5px);
    }
  }
`;
