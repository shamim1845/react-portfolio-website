import GlobalStyle from "./Global.style";
import styled from "styled-components";
import LeftSideBar from "./components/layout/left/LeftSideBar";
import MainArea from "./components/layout/main/MainArea";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    bg1: "linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)",
    bg2: "#20202a",
    lightColor: "#fafafc"
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <AppContainer>
          <LeftSideBar />
          <MainArea />
        </AppContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1440px;
  margin: auto;
  padding: 1.5rem;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
