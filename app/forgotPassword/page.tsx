// ForgotPassword.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ForgotPassword.module.css';

const ForgotPassword: React.FC = () => {
  // State untuk menyimpan email pengguna
  const [email, setEmail] = useState('');

  // Handler untuk menangani pengiriman permintaan reset password
  const handleResetPassword = (event: React.FormEvent) => {
    event.preventDefault();
    // Kirim permintaan reset password ke alamat email yang dimasukkan
    // Di sini Anda bisa menambahkan logika untuk mengirim email reset password atau menampilkan pesan bahwa email reset password telah dikirim
    alert(`Permintaan reset password telah dikirim ke ${email}. Silakan periksa kotak masuk Anda.`);
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>SKIPTIF</h1>
    <form onSubmit={handleResetPassword} className={styles.form}>
    <p className={styles.ket}>Enter your email and we'll send you a link to reset your password</p>
      <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
        <div className={styles.linksContainer}>
            <div>
              <Link href="/" legacyBehavior>
                <a className={styles.link}>Back to login</a>
              </Link>
            </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
