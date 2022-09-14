import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const Progressbar = ({start, end, delay}) => {
    const [count, setCount] = useState(start);
   
    useEffect(() => {
       
               let num = start;
        const interval = setInterval(() => {
                num++;
              setCount(num);
                if(num === end) {
                    clearInterval(interval)
                }
        }, delay)

 
    
    }, [])
   
  return (
    <Container>
        <div className="circular_progress" style={{background: `conic-gradient(
            #FFC107 ${count * 3.6}deg,
            #191923 ${count * 3.6}deg
            )`}}>
            <div className="value_container">
              {count}%
            </div>
        </div>
    </Container>
  )
}

export default Progressbar;

const Container = styled.div`

    .circular_progress{
        position: relative;
        height: 55px;
        width: 55px;
        background-color: orange;
        border-radius: 50%;
        display: grid;
        place-items: center;

        &::before{
            content: "";
            position: absolute;
            width: 84%;
            height: 84%;
            border-radius: 50%;
            background-color: ${({theme}) => theme.bg2};
        }

        .value_container{
            position: relative;
            font-size: 1.2rem;
            
        }
    }
`