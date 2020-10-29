import React from 'react';
import styles from './App.module.less';
import { Button } from 'antd';

function App() {
  return (
    <div className={styles.app}>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
