import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import { BulbFilled, BulbOutlined } from '@ant-design/icons';
import header from './header.module.less';
const { Title } = Typography;

declare global {
  interface Window {
    less: any;
  }
}

const Header: React.FC = () => {
  const [light, setLight] = useState(true);
  const lightTheme = {
    '@body-background': '#fff',
    '@heading-color': 'rgba(0, 0, 0, 0.85)',
    '@text-color': 'rgba(0, 0, 0, 0.65)',
    '@component-background': '#000000',
    '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
    '@card-background': '#fff',
  };
  const darkTheme = {
    '@body-background': '#000000',
    '@heading-color': 'rgba(255, 255, 255, 0.85)',
    '@text-color': 'rgba(255, 255, 255, 0.65)',
    '@component-background': '#fff',
    '@text-color-secondary': 'rgba(255, 255, 255, 0.45)',
    '@card-background': '#000000',
  };

  const less = window.less;
  const handleClick = () => {
    setLight(!light);
    if (light) less.modifyVars(lightTheme);
    else less.modifyVars(darkTheme);
  };

  return (
    <div className={header.header}>
      <Title level={3} className={header.logo}>
        BL
      </Title>
      <Button
        className={header.lightSwitch}
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
