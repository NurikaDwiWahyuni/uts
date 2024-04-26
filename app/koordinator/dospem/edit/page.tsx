// components/DosenForm.tsx
'use client'
import { useState } from 'react';import Navbar from '../../navbar';
import styles from '../dospem.module.css';
import { tambahDosen } from '../../../lib/firebase/dosenService';

const DosenForm : React.FC = () => {
  const [nama, setNama] = useState('');
  const [nip, setNIP] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [keahlian, setKeahlian] = useState('');
  const [kuota, setKuota] = useState(0);

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await tambahDosen({
            nama,
            nip,
            jenisKelamin,
            keahlian,
            kuota, // pastikan kuota adalah string
          });
          
        alert('Data dosen berhasil ditambahkan!');
      } catch (error) {
        alert('Gagal menambahkan data dosen. Silakan coba lagi.');
      }
    };
  return (
    <div className={styles.bg}>
    <div className={styles.container}>
    <Navbar />

      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">Nama Dosen:</label>
        <input
          type="text"
          name="name"
          required 
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className={styles.input}
        />
          <label className={styles.label} htmlFor="nip">NIP Dosen:</label>
        <input
          type="text"
          name="nip"
          required 
          value={nip}
          onChange={(e) => setNIP(e.target.value)}
          className={styles.input}
        />
          <label className={styles.label} htmlFor="jenisKelamin">Jenis Kelamin:</label>
          <select className={styles.input} id="jenisKelamin" value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} required>
            <option value="">Pilih Jenis Kelamin</option>
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>

          <label className={styles.label} htmlFor="keahlian">Keahlian:</label>
        <input
          type="text"
          name="keahlian"
          required 
          value={keahlian}
          onChange={(e) => setKeahlian(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label} htmlFor="kuota">
          Kuota:
        </label>
        <input
          type="number"
          name="kuota"
          required
          value={kuota}
          onChange={(e) => setKuota(Number(e.target.value))}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button> 
      </form>
    </div>
    </div>
  );
};

export default DosenForm;
