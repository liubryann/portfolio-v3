import React from 'react';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Text } = Typography;

import footer from './footer.module.less';
const Footer: React.FC = () => {
  return (
    <div className={footer.footer}>
      <Text>Made with React, TypeScript and Ant Design</Text>
      <BackTop>
        <UpOutlined />
      </BackTop>
    </div>
  );
};

export default Footer;
