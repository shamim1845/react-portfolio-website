import React from 'react'
import styled from 'styled-components';

const Technology = ({tech}) => {
  return (
    <Container>
    <div className="skill">{tech}</div>

  </Container>
  )
}

export default Technology;

const Container = styled.div`
     
  

      .skill {
        background: ${({ theme }) => theme.grayColor};
        padding: 1.2rem 2.4rem;
        border-radius: 0.5rem;
        font-size: 1.3rem;
        font-weight: 500;
        color: ${({ theme }) => theme.orangeColor};
      }
    
`