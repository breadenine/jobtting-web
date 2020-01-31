import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './Home';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout className="layout" style={{ background: '#fff' }}>
        <Header style={{ padding: '0 2rem', background: '#fff' }}>
          <div
            className="logo"
            style={{
              width: '120px',
              background: 'rgba(255, 255, 255, 0.2)',
              float: 'left',
            }}
          >
            잡팅
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <Link to="/">목록</Link>
            </Menu.Item>
            <Menu.Item key="2">메뉴 2</Menu.Item>
            <Menu.Item key="3">메뉴 3</Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            padding: '2rem',
          }}
        >
          <Switch>
            <Route to="/" exact component={Home} />
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
