import React from 'react';
import Navbar from '../navbar';
import styles from './beranda.module.css';

const Beranda: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.card}>
          <div className={styles.welcome}>
            <h1>Welcome, Koordinator!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
