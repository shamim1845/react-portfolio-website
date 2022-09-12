import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BottomBar from "./BottomBar";
import Profile from "./Profile";

const LeftSideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Profile />
        <BottomBar />
      </Wrapper>
    </Container>
  );
};

export default LeftSideBar;

const Container = styled.div`
  background: ${({ theme }) => theme.bg2};
  overflow-x: hidden;
  width: 39rem;
  height: 100%;
  transition: all 0.7s ease-in-out;
  color: #8c8c8e;
`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
