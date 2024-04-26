'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { FaHome } from 'react-icons/fa';
import { PiUsersFourFill } from "react-icons/pi";
import { RiUser5Fill } from "react-icons/ri";
import { RiUser2Fill } from "react-icons/ri";
const Navbar: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('dashboard'); // State untuk melacak halaman aktif

  useEffect(() => {
    // Saat komponen dimuat, tetapkan menu Dashboard sebagai aktif secara default
    setActivePage('dashboard');
  }, []);

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
  };

  const accountName = 'John Doe'; // Ganti dengan nama yang diambil dari data nama pada saat register

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        
        <h1 className={styles.navbarTitle}>SKRIPTIF</h1>
        
        <ul>

          <li>
            <Link href="/mahasiswa/beranda" legacyBehavior>
              <a
                className={`${styles.navbarItem} ${activePage === 'dashboard' ? styles.active : ''}`}
                onClick={() => handleSetActivePage('dashboard')}
              >
                <FaHome />
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/koordinator/mahasiswa" legacyBehavior>
              <a
                className={`${styles.navbarItem} ${activePage === 'pendaftaran' ? styles.active : ''}`}
                onClick={() => handleSetActivePage('pendaftaran')}
              >
                <PiUsersFourFill />                
                Mahasiswa
              </a>
            </Link>
          </li>
          <li>
            <Link href="/koordinator/dospem/daftarDosen" legacyBehavior>
              <a
                className={`${styles.navbarItem} ${activePage === 'lecturer' ? styles.active : ''}`}
                onClick={() => handleSetActivePage('lecturer')}
              >
                <RiUser5Fill />
                Dosen Pembimbing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/koordinator/dospeng/daftarDosen" legacyBehavior>
              <a
                className={`${styles.navbarItem} ${activePage === 'status' ? styles.active : ''}`}
                onClick={() => handleSetActivePage('status')}
              >
                <RiUser2Fill />
                Dosen Penguji
              </a>
            </Link>
          </li>

          <li>
            <Link href="/" legacyBehavior>
              <a className={styles.navbarLogout} style={{ color: '#FF0000' }}>
                Log Out
              </a>
            </Link>
          </li>

        </ul>
      
      </div>
    </nav>
  );
};

export default Navbar;
