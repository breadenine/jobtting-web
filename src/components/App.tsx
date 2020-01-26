import React from 'react';
import { Layout, Menu } from 'antd';
import JobList from './JobList';
const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{background: '#fff'}}>
          <div className="logo" style={{
            width: '120px',
            background: 'rgba(255, 255, 255, 0.2)',
            float: 'left'
          }}>Jobtting</div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">목록</Menu.Item>
            <Menu.Item key="2">메뉴 2</Menu.Item>
            <Menu.Item key="3">메뉴 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ flex: '1', padding: '50px' }}>
          <JobList />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
