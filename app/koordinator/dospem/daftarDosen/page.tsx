// components/DaftarDosen.tsx
'use client'

import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from '../../../lib/firebase/init';
import styles from './daftar.module.css';
import Navbar from  '../../navbar';

interface Dosen {
    id: string;
    nama: string;
    nip: string;
    jenisKelamin: string;
    keahlian: string;
    kuota: number;
  }
  
  const DaftarDosen: React.FC = () => {
    const [daftarDosen, setDaftarDosen] = useState<Dosen[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const dosenCollection = collection(firestore, 'dosen');
          const snapshot = await getDocs(dosenCollection);
          const dosenData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Dosen[];
          setDaftarDosen(dosenData);
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
          <table className={styles['daftar-table']}>
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
              {daftarDosen.map((dosen) => (
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
        </div>
        </div>
      );
    };
    
    export default DaftarDosen;