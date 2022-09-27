import React from "react";
import { Routes, Route } from "react-router";
import styled from "styled-components";
import routes from "../../../routes/routes";
import { d } from "../../../resources/stylesheets/dimensions";
import Empty from "../../../components/empty";

const SMain = styled.main`
  grid-area: main;
  display: grid;
  min-height: calc(100vh - ${d.header});
  z-index: 0;
`;

const Main: React.FC = () => (
  <SMain>
    <Routes>
      {routes.map(({ path, container }) => (
        <Route key={path} path={path} element={container} />
      ))}
      <Route path="*" element={<Empty />} />
    </Routes>
  </SMain>
);

export default Main;
