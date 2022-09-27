import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import ScrollRestoration from "./components/scrollRestoration";
import Global from "../resources/stylesheets/global";

const SApp = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-areas: "header" "main" "footer";
`;

const App: React.FC = () => (
  <BrowserRouter>
    <SApp>
      <Header />
      <Main />
      <Footer />
      <ScrollRestoration />
      <Global />
    </SApp>
  </BrowserRouter>
);

export default App;
