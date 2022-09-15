import React from 'react';
import styled from 'styled-components';

const ProfileInfo = () => {
  return (
    <Container>
        <div className="info">
            <p className='first_child'>Residence:</p> <p className='last_child'>Bangaledesh</p>
        </div>
        <div className="info">
            <p className='first_child'>City:</p> <p className='last_child'>Dhaka</p>
        </div>
        <div className="info">
            <p className='first_child'>Age:</p> <p className='last_child'>22</p>
        </div>
        <div className="divider"></div>
    </Container>
  )
}

export default ProfileInfo;

const Container = styled.div`
width: 100%;
padding-top: 1rem;
    
    .info{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .first_child{
            color: ${({theme}) => theme.lightColor};
        }
        .last_child{
            color: ${({theme}) => theme.grayColor};
        }
    }
`