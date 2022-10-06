import React from 'react'
import styled from 'styled-components';
import HistoryCard from '../HistoryCard';

const History = () => {
  const EduHistory = [
    {
      institue: 'Atish Dipankar University of Science and Technology(Adust)',
      date: 'may 2022 - current',
      role: "student",
      degree: "BSC",
      comment: "I have a dream to be a software developer. That's why I have started my bachelor's course at Atish Dipankar University of Science and Technology(Adust) in the department of CSE. Now, I have focused on completing my bachelor's degree and want to be a self-taught software developer. Just it."
    },
    {
      institue: 'Govt. Technical School & College, Natore',
      date: 'may 2016 - jan 2021',
      role: "student",
      degree: "Diploma",
      comment: "I started my diploma course in 2016. In this course, I got selected for the department of Power Technology. After joining this course, I learned many things about the department of power and mechanicals. In 2021, I completed my diploma and got certified."
    },
    {
      institue: 'Sher-E-Bangla High School,Natore',
      date: 'may 2022 - current',
      role: "student",
      degree: "SSC",
      comment: "In 2011, after passed of PSC I joined a school called Sher E Bangla High School, Natore. In this school, I studied classes from sixth - tenth. Finally, I joined the SSC exam and got my certificate in 2016."
    },
  ]


  return (
    <Container className='container'>
      <h4>Education History</h4>

      <div className="cards">
        {
          EduHistory.map((data) => {
            return (
              <HistoryCard key={data. institue} data={data}/>
            )
          })
        }
      </div>
    </Container>
  )
}

export default History;
const Container = styled.div`
position: relative;


h4 {
    color: ${({ theme }) => theme.lightColor};
    padding: 2.5rem 0;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    &::after {
    content: '';
    position: absolute;
    top: 10rem;
    right: 11.5rem;
       height: calc(100% - 10rem);
    width: 5px;
    background: #191923;

    @media (max-width: 920px) {
      /* min-height: 100vh; */
      height: calc(100% - 15rem);
      top: 10rem;
    right: 2.5rem;
    }
}
  }
  

`