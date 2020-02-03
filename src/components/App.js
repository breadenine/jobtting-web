import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import Home from '../containers/Home';
import JobCreate from '../containers/JobCreate';
import JtHeader from './base/JtHeader';

const App = () => {
  return (
    <BrowserRouter>
      <JtLayout className="layout">
        <JtHeader />
        <Content>
          <div className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/create" exact component={JobCreate} />
            </Switch>
          </div>
        </Content>
      </JtLayout>
    </BrowserRouter>
  );
};

const JtLayout = styled(Layout)`
  background: #fff;
`;
const Content = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;

  .main {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1200px) {
    align-items: center;

    .main {
      width: 1200px;
    }
  }
`;

export default App;
