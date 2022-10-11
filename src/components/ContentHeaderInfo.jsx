import React from 'react'
import styled from 'styled-components';

const ContentHeaderInfo = ({title, desc}) => {
  return (
    <Container className="container">
    <h3>{title}</h3>
    <div className="divider_orange"></div>
    <h5>{desc}</h5>

 
  </Container>
  )
}

export default ContentHeaderInfo;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5rem;
padding: 3rem 3rem 2rem 3rem!important;

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.lightColor};
  }
  h5 {
    max-width: 60rem;
    min-height: 7rem;
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.grayColor};
  }
`