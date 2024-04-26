'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { FaHome } from 'react-icons/fa';
import { FaUserEdit } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaListCheck } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('dashboard'); // State untuk melacak halaman aktif

  useEffect(() => {
    // Saat komponen dimuat, tetapkan menu Dashboard sebagai aktif secara default
    setActivePage('dashboard');
  }, []);

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
  };



// Di dalam fungsi penanganan login


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
            <Link href="/mahasiswa/pendaftaran" legacyBehavior>
              <a
                className={`${styles.navbarItem} ${activePage === 'pendaftaran' ? styles.active : ''}`}
                onClick={() => handleSetActivePage('pendaftaran')}
              >
                <FaUserEdit />
                Pendaftaran
              </a>
            </Link>
          </li>
          <li>
            <Link href="/mahasiswa/dosen" legacyBehavior>
              <a
                className={`${styles.navbarItem} ${activePage === 'lecturer' ? styles.active : ''}`}
                onClick={() => handleSetActivePage('lecturer')}
              >
                <HiUserGroup />
                Dosen Pembimbing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/mahasiswa/status" legacyBehavior>
              <a
                className={`${styles.navbarItem} ${activePage === 'status' ? styles.active : ''}`}
                onClick={() => handleSetActivePage('status')}
              >
                <FaListCheck />
                Status
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
