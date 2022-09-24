import React from 'react'
import styled from 'styled-components';
import Experience from '../Experience';
import HomeBanner from '../HomeBanner';
import MyServices from '../MyServices';

const Home = () => {
  return (
    <Container>
      <HomeBanner />
      <Experience />
      <MyServices />

    </Container>
  )
}

export default Home;

const Container = styled.div`
 width: 100%;
 height: 100%;
 overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

padding: 0 2.5rem 5rem 2.5rem;
 @media (max-width: 920px) {
  padding:0 0rem 10rem 0;
 }
`