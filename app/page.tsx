'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Head from 'next/head';
import FormError from './components/form/errors';
import styles from './components/Login.module.css';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false, // Hindari pengalihan otomatis
      });

      if (response?.error) {
        setLoginError(response.error); // Tetapkan pesan kesalahan login
      } else {
        // Cek apakah email dan kata sandi sesuai dengan yang diinginkan
        if (email === "12250120360@students.uin-suska.ac.id" && password === "nurika123") {
          // Jika sesuai, arahkan pengguna ke halaman tertentu
          window.location.href = "/koordinator/beranda";
        } else {
          // Jika tidak sesuai, tangani login seperti biasa
          // Misalnya, jalankan logika login dari API atau lakukan validasi lainnya
          // Di sini Anda bisa menampilkan pesan kesalahan jika kredensial tidak cocok
          setLoginError('Email or password is incorrect');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Tangani error login di sini
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>SKIPTIF</title>
      </Head>
      <h1 className={styles.title}>SKIPTIF</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
          className={styles.input}
        />
        <FormError error={errors.email} />
        
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password", { 
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters long" },
            pattern: {
              value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
              message: "Password must contain at least one letter and one number"
            }
          })}
          className={styles.input}
        />
        <FormError error={errors.password} />
        
        <button type="submit" className={styles.button}>
          Login
        </button>
        {loginError && <div className={styles.error}>{loginError}</div>} {/* Tampilkan pesan kesalahan login */}
        <div className={styles.linksContainer}>
          <div>
            <Link href="/forgotPassword" legacyBehavior>
              <a className={styles.link}>Forgot password?</a>
            </Link>
          </div>
          <div className={styles.linkText}>
            <div className={styles.linkTextInner}>
              <span className={styles.dontHaveAccount}>Don't have an account?</span>
            </div>
            <Link href="/register" legacyBehavior>
              <a className={styles.linkRegister}>Register here</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
