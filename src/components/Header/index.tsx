import React, { useState } from 'react';
import { Button } from 'antd';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import dark from '../../styles/Dark.module.less';
import styles from '../../styles/App.module.less';

declare global {
  interface Window {
    less: any;
  }
}

const Header: React.FC = () => {
  const [light, setLight] = useState(false);
  const lightTheme = {
    '@body-background': '#fff',
    '@heading-color': 'rgba(0, 0, 0, 0.85)',
    '@text-color': 'rgba(0, 0, 0, 0.65)',
  };
  const darkTheme = {
    '@body-background': '#000000',
    '@heading-color': 'rgba(255, 255, 255, 0.85)',
    '@text-color': 'rgba(1, 1, 1, 0.65)',
  };
  const less = window.less;
  const handleClick = () => {
    setLight(!light);
    if (light) less.modifyVars(lightTheme);
    else less.modifyVars(darkTheme);
  };

  return (
    <div>
      <Button
        type="primary"
        shape="circle"
        ghost={true}
        onClick={handleClick}
        icon={light ? <BulbOutlined /> : <BulbFilled />}
      />
    </div>
  );
};

export default Header;
