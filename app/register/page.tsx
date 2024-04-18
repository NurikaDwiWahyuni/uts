'use client'

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import styles from './Register.module.css';

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [nim, setNim] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('nim', nim);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Pendaftaran berhasil!');
    // Redirect ke halaman lain, misalnya beranda
    window.location.href = '/';
  };
    // Perform registration logic here
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SKIPTIF</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <label className={styles.label} htmlFor="nim">
          NIM
        </label>
        <input
          type="text"
          name="nim"
          placeholder="Enter your NIM"
          required
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          className={styles.input}
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
        <div className={styles.linkText}>
              <div className={styles.linkTextInner}>
                <span className={styles.haveAccount}>Have an account?</span>
              </div>
              <Link href="/" legacyBehavior>
                <a className={styles.linkLogin}>Log in</a>
              </Link>
            </div>
      </form>
    </div>
  );
};


export default Register;