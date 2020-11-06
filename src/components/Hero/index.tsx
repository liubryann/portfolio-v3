import React from 'react';
import { Typography } from 'antd';
import hero from './hero.module.less';

const { Title } = Typography;

const Hero: React.FC = () => {
  return (
    <div className={hero.hero}>
      <Title level={1}>Bryan Liu</Title>
      <Title level={3}>3rd Year SWE @UofT</Title>
    </div>
  );
};

export default Hero;
