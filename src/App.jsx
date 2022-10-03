import { createContext, useState } from "react";
import GlobalStyle from "./Global.style";
import styled from "styled-components";
import LeftSideBar from "./components/layout/left/LeftSideBar";
import MainArea from "./components/layout/main/MainArea";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import RightSidebar from "./components/layout/right/RightSidebar";
import MobileNavbar from "./components/layout/MobileNavbar";

export const AppContext = createContext();
function App() {
  const [navLeft, setNavLeft] = useState(false);
  const [navRight, setNavRight] = useState(false);

  const value = {
    navLeft,
    setNavLeft,
    navRight,
    setNavRight,
  };
  const theme = {
    bg1: "linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)",
    bg2: "#20202a",
    grayBg: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
    lightColor: "#fafafc",
    grayColor: "#8c8c8e",
    orangeColor: "#FFC107",
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContext.Provider value={value}>
          <AppContainer>
        
            <MobileNavbar />
            <Wrapper>
              <LeftSideBar />
              <MainArea />
              <RightSidebar navRight={navRight} setNavRight={setNavRight} />
            </Wrapper>
          </AppContainer>
        </AppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 100vh;
  margin: auto;
  position: relative;
  padding: 2rem;
  @media (max-width: 920px) {
    padding: 0;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;


  @media (min-width: 921px) {
    overflow: hidden;
  }
  @media (max-width: 920px) {
    &::before {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.pexels.com/photos/2083842/pexels-photo-2083842.jpeg?auto=compress&cs=tinysrgb&w=600");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: -5;
  }
  }

  
`;
