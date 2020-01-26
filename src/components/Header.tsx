import React from 'react';
import { Button } from 'antd';

const Header: React.FC = () => {
  return (
    <header className="header">
      Logo
      <Button type="danger">버튼</Button>
    </header>
  );
}

export default Header;
