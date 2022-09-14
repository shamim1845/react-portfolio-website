import React from 'react';
import styled from "styled-components";

const HorizontalProgressBar = ({tech, percent}) => {
  return (
    <Container>
    <div className="wrapper">
      <div className="program_info">
        <p className="lang">{tech}</p>
        <p>{percent} %</p>
      </div>
      <div className="progress_bar">
        <div className="progress_inner" style={{width: `${percent}%`}}></div>
      </div>
    </div>
  
  </Container>
  )
}

export default HorizontalProgressBar;


const Container = styled.div`
  width: 100%;
 
  .wrapper {
    width: 100%;
    .program_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5rem 0;

      .lang{
        color: ${({theme}) => theme.lightColor};
        font-weight: 500;
      }
    }
    .progress_bar {
      width: 100%;
      height: .4rem;
      margin: .5rem 0;
      background: #191923;

      .progress_inner{
      
        height: 100%;
        background-color: ${({theme}) => theme.orangeColor};
        animation: progress 2s linear;

@keyframes progress {
    0%{
      transform: translateX(-100%);
    }

    100%{
      width: translateX(0%);
    }
}
      }
  
    }
  }
`;
