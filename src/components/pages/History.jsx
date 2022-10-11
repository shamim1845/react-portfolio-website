import React from "react";
import styled from "styled-components";
import { EduHistory } from "../../assets/Data";
import ContentHeaderInfo from "../ContentHeaderInfo";
import HistoryCard from "../HistoryCard";

const History = () => {


  return (
    <Container className="container">
      <ContentHeaderInfo
        title="Educational History"
        desc=" Here, you will find my educational history. 

        where I learned and currently trying to learn."
      />

      <div className="cards_Container">
        <div className="cards">
          {EduHistory.map((data) => {
            return <HistoryCard key={data.institue} data={data} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default History;
const Container = styled.div`
  position: relative;
  margin-top: -5rem;

  .cards_Container {
    width: 100%;
    height: 100%;
    .cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;

      
      &::after {
        content: "";
        position: absolute;
        top: 22rem;
        right: 11.5rem;
        height: calc(100% - 22rem);
        width: 5px;
        background: #191923;

        @media (max-width: 920px) {
          height: calc(100% - 27rem);
          top: 22rem;
          right: 2.5rem;
        }
      }
    }
  }
`;
