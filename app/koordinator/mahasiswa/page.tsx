'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar';
import styles from './mahasiswa.module.css';
import Link from 'next/link'
import { retrieveDataPendaftaran } from '../../lib/firebase/mahasiswaService';

const DaftarPendaftaran: React.FC = () => {
  const [pendaftaranData, setPendaftaranData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveDataPendaftaran();
        setPendaftaranData(data);
      } catch (error) {
        console.error('Error fetching pendaftaran data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (id: string) => {
    router.push(`/detail/${id}`); // Ganti '/detail' dengan rute yang sesuai untuk halaman detail
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Navbar />
        <table className={styles['daftar-table']}>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>NIM</th>
              <th>Email</th>
              <th>Judul TA</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {pendaftaranData.map((pendaftaran, index) => (
              <tr key={index}>
                <td>{pendaftaran.date}</td>
                <td>{pendaftaran.name}</td>
                <td>{pendaftaran.nim}</td>
                <td>{pendaftaran.email}</td>
                <td>{pendaftaran.judulTA}</td>
                <td>Waiting</td>
                <td>
                <Link href="/koordinator/mahasiswa/detail" legacyBehavior>
                 <a>Detail</a>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DaftarPendaftaran;
