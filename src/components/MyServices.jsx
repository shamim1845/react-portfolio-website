import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const MyServices = () => {
  const data = [
    {
      title: "Web Development",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores praesentium magni, reiciendis quae, maxime non ut distinctio fuga, sit commodi voluptatem nostrum non neque. Libero?",
      link: "/web-development",
    },
    {
      title: "UI/UX Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores praesentium magni, reiciendis quae, maxime non ut distinctio fuga, sit commodi voluptatem nostrum non neque. Libero?",
      link: "/ui-ux-design",
    },
    {
      title: "Game Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores praesentium magni, reiciendis quae, maxime non ut distinctio fuga, sit commodi voluptatem nostrum non neque. Libero?",
      link: "/game-design",
    },
    {
      title: "Advertising",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores praesentium magni, reiciendis quae, maxime non ut distinctio fuga, sit commodi voluptatem nostrum non neque. Libero?",
      link: "/advertising",
    },
  ];
  return (
    <Container>
      <h4>My Awesome Services</h4>
      <div className="cards">
        {data?.map((card) => {
          return (
            <>
              <ServiceCard card={card} />
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default MyServices;

const Container = styled.div`
  h4 {
    color: ${({ theme }) => theme.lightColor};
    padding-bottom: 2rem;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }
`;
