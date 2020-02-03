import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import JobList from '../components/templates/JobList';

const Home = () => {
  return (
    <>
      <Link to="/create" style={{ marginLeft: 'auto' }}>
        <Button type="primary" icon="plus">
          기업등록
        </Button>
      </Link>
      <JobList />
    </>
  );
};

export default Home;
