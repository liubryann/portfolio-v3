import React from 'react';
import styles from './styles/App.module.less';
import container from './styles/container.module.less';

import Header from './components/Header';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className={styles.app}>
      <div className={container.container}>
        <Header />
        <Hero />
        <Jobs />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
