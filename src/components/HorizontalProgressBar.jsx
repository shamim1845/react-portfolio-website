import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const HorizontalProgressBar = ({tech, percent, delay}) => {
  const [count, setCount] = useState(0);
   
  useEffect(() => {
     
             let num = 0;
      const interval = setInterval(() => {
              num++;
            setCount(num);
              if(num === percent) {
                  clearInterval(interval)
              }
      }, delay)
    }, [])

  return (
    <Container>
    <div className="wrapper">
      <div className="program_info">
        <p className="lang">{tech}</p>
        <p>{count} %</p>
      </div>
      <div className="progress_bar">
        <div className="progress_inner" style={{width: `${count}%`}}></div>
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
      transition: all .4s ease-in-out;

      .progress_inner{
      
        height: 100%;
        background-color: ${({theme}) => theme.orangeColor};

      }
  
    }
  }
`;
