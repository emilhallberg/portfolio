import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import routes from '../../../routes/routes';
import { d } from '../../../resources/stylesheets/dimensions';
import Empty from '../../../components/empty';

const SMain = styled.main`
  grid-area: main;
  display: grid;
  min-height: calc(100vh - ${d.header});
  z-index: 0;
`;

const Main: React.FC = () => {
  return (
    <SMain>
      <Switch>
        {routes.map(({ path, container }) => (
          <Route key={path} path={path} exact>
            {container}
          </Route>
        ))}
        <Route>
          <Empty />
        </Route>
      </Switch>
    </SMain>
  );
};

export default Main;
