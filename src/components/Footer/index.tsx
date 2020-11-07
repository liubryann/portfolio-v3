import React from 'react';
import { BackTop } from 'antd';
import {
  UpOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import pdf from '../../documents/resume.pdf';
const { Text } = Typography;

import footer from './footer.module.less';
const Footer: React.FC = () => {
  return (
    <div className={footer.footer}>
      <Text>Made with React, TypeScript and Ant Design. </Text>
      <div className={footer.contact}>
        <a href="https://github.com/liubryann">
          <GithubOutlined />
        </a>
        <a href="https://www.linkedin.com/in/bryanliu-2000/">
          <LinkedinOutlined />
        </a>
        <Text>
          <a href={pdf} rel="noopener noreferrer" target="_blank">
            cv
          </a>
        </Text>
        <Text>
          <a href="https://github.com/liubryann/portfolio-v3">src</a>
        </Text>
      </div>
      <BackTop>
        <UpOutlined />
      </BackTop>
    </div>
  );
};

export default Footer;
