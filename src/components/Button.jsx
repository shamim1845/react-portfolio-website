import React from 'react'
import styled from 'styled-components';

const Button = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default Button;

const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
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