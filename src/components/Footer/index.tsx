import React from 'react';
import { Typography } from 'antd';
const { Text } = Typography;

import footer from './footer.module.less';
const Footer: React.FC = () => {
  return (
    <div className={footer.footer}>
      <Text>Made with React, TypeScript and Ant Design</Text>
    </div>
  );
};

export default Footer;
