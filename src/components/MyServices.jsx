import React from 'react'
import styled from 'styled-components';
import ServiceCard from './ServiceCard'

const MyServices = () => {
  return (
    <Container>
        <h4>My Awesome Services</h4>
        <div className="cards">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        </div>
  
    </Container>
  )
}

export default MyServices;

const Container = styled.div`

h4{
    color:  ${({theme}) => theme.lightColor};
    padding-bottom: 2rem;
}
    .cards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
    }
    `
