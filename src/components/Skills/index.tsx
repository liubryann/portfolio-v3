import React from 'react';
import { Divider } from 'antd';
import { Tag } from 'antd';

import skills from './skills.module.less';

const Skills: React.FC = () => {
  return (
    <div>
      <Divider>Skills</Divider>
      <div className={skills.tags}>
        <Tag color="#5b8c00">JavaScript</Tag>
        <Tag color="#5b8c00">Java</Tag>
        <Tag color="#5b8c00">C</Tag>
        <Tag color="#5b8c00">Python</Tag>
        <Tag color="#5b8c00">Shell Script</Tag>

        <Tag color="#ad8b00">React.js</Tag>
        <Tag color="#ad8b00">Redux</Tag>
        <Tag color="#ad8b00">Node.js</Tag>
        <Tag color="#ad8b00">Express</Tag>
        <Tag color="#ad8b00">Flutter</Tag>

        <Tag color="#ad4e00">PostgreSQL</Tag>
        <Tag color="#ad4e00">MongoDB</Tag>
        <Tag color="#ad4e00">Firebase</Tag>
        <Tag color="#ad4e00">Neo4j</Tag>

        <Tag color="#006d75">Git</Tag>
        <Tag color="#006d75">SVN</Tag>
        <Tag color="#006d75">Docker</Tag>
        <Tag color="#006d75">Github Actions</Tag>
        <Tag color="#006d75">Postman</Tag>
        <Tag color="#006d75">Jira</Tag>
      </div>
    </div>
  );
};

export default Skills;
