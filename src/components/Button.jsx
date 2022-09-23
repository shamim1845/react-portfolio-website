import React from 'react'
import styled from 'styled-components';

const Button = () => {
  return (
    <Container>explore now</Container>
  )
}

export default Button;

const Container = styled.button`
    text-transform: uppercase;
     box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    color: #20202a;
    background: #FFC107;
    letter-spacing: 1.5px;
    font-weight: 600;
     display: inline-flex;
    border: none;
    transition: all .5s ease-in-out;
    padding: 1.2rem 2.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 2px;

    &:hover{
      transform: translateY(-0.3rem);
    }
`