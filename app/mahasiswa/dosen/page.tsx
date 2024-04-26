'use client'

import { useEffect, useState } from 'react';
import Navbar from '../navbar';
import { retrieveDataDosen } from '../../lib/firebase/dosenService';
import styles from './dosen.module.css';

const DosenPage: React.FC = () => {
  const [dosenData, setDosenData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveDataDosen();
        setDosenData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dosen data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Navbar />
        <h1>Data Dosen</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nama</th>
                <th>NIP</th>
                <th>Jenis Kelamin</th>
                <th>Keahlian</th>
                <th>Kuota</th>
              </tr>
            </thead>
            <tbody>
              {dosenData.map((dosen) => (
                <tr key={dosen.id}>
                  <td>{dosen.nama}</td>
                  <td>{dosen.nip}</td>
                  <td>{dosen.jenisKelamin}</td>
                  <td>{dosen.keahlian}</td>
                  <td>{dosen.kuota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DosenPage;
