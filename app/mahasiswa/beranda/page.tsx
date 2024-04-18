import React from 'react';
import Navbar from '../navbar';
import styles from './beranda.module.css';

interface WelcomeProps {
  username: string;
}

const Beranda: React.FC<WelcomeProps> = ({ username }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
      <Navbar />
      <div className={styles.card}>
        <div className={styles.welcome}>
          <h1>Welcome, {username}!</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Beranda;
