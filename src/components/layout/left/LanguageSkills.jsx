import React from 'react'
import styled from 'styled-components';
import Progressbar from '../../Progressbar';

const LanguageSkills = () => {
  return (
  <>

    <Container>
        <div className="skill_wrapper">
          <Progressbar start={0} end={80} delay={20}/>
            <p className='language'>English</p>
        </div>
        <div className="skill_wrapper">
          <Progressbar start={0} end={95} delay={20}/>
            <p className='language'>Bengali</p>
        </div>
        <div className="skill_wrapper">
          <Progressbar start={0} end={50} delay={20}/>
            <p className='language'>Hindi</p>
        </div>
        
    </Container>
    <div className="divider"></div>
    </>
  )
}

export default LanguageSkills;

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: .5rem 0;

.skill_wrapper{
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


    .language{
color: ${({theme}) => theme.lightColor};
margin-top: .5rem;
    }
}
    
`