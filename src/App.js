import { Box, ThemeProvider, styled } from "@mui/material";
import { siteTheme } from "./theming/index.ts";
import {
  AboutMeView,
  Header,
  PreviousWorkView,
  ProjectsView,
} from "./views/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const BoxStyled = styled(Box)({
  height: "100vh",
});

function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <BoxStyled>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<AboutMeView />} />
            <Route path="/aboutMe" element={<AboutMeView />} />
            <Route path="/previousWork" element={<PreviousWorkView />} />
            <Route path="/projects" element={<ProjectsView />} />
          </Routes>
        </Router>
      </BoxStyled>
    </ThemeProvider>
  );
}

export default App;
