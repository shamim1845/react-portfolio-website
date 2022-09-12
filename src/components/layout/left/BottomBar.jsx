import React from 'react';
import styled from 'styled-components';

const BottomBar = () => {
  return (
    <Container>BottomBar</Container>
  )
}

export default BottomBar;

const Container = styled.div`
      width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.bg1};
  position: absolute;
  bottom: 0rem;
  left: 0;

  animation: move 0.7s ;

@keyframes move {
  0% {
    transform: translateX(20rem);
  }

  100% {
    transform: translateX(0rem);
  }
}
`