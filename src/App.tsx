import React from 'react';
import styles from './styles/App.module.less';
import { Button } from 'antd';
import { Typography } from 'antd';
import Header from './components/Header';

const { Title } = Typography;

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Title level={1}>Bryan Liu</Title>
    </div>
  );
}

export default App;
