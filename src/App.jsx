import { createContext, useState } from "react";
import GlobalStyle from "./Global.style";
import styled from "styled-components";
import LeftSideBar from "./components/layout/left/LeftSideBar";
import MainArea from "./components/layout/main/MainArea";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import MobileNavbar from "./components/layout/MobileNavbar";
import RightSidebar from "./components/layout/right/RightSidebar";
import FullImageContainer from "./components/FullImageContainer";

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
          <Wrapper>
            <MobileNavbar />
            <AppContainer>
              <LeftSideBar />
              <MainArea />
              <RightSidebar navRight={navRight} setNavRight={setNavRight} />
              {/* <FullImageContainer /> */}
            </AppContainer>
          </Wrapper>
        </AppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1440px;
  margin: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
  @media (max-width: 920px) {
    padding: 0 1.5rem;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 920px) {
  }
`;
