'use client'

import { useState } from 'react';
import Navbar from '../navbar';
import styles from './pendaftaran.module.css';
import { retrieveDataPendaftaran } from '../../lib/firebase/mahasiswaService';

const Pendaftaran: React.FC = () => {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [judulTA, setJudulTA] = useState('');
  const [tipeTA, setTipeTA] = useState('');
  const [kategoriTA, setKategoriTA] = useState('');
  const [dosenPembimbing1, setDosenPembimbing1] = useState('');
  const [dosenPembimbing2, setDosenPembimbing2] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date()); // Menyimpan tanggal saat ini

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan validasi data
    if (!name || !nim || !email || !judulTA || !tipeTA || !kategoriTA || !dosenPembimbing1 || !dosenPembimbing2 || !file) {
      alert('Please fill in all fields and upload a file');
      return;
    }
    // Kirim data ke backend atau lakukan operasi yang diperlukan
    // Misalnya, mengirim data ke server atau menyimpannya di penyimpanan lokal
    try {
      await retrieveDataPendaftaran();
      alert('Data pendaftaran berhasil ditambahkan!');
      // Reset form fields after successful submission
      setName('');
      setNim('');
      setEmail('');
      setJudulTA('');
      setTipeTA('');
      setKategoriTA('');
      setDosenPembimbing1('');
      setDosenPembimbing2('');
      setFile(null);
      setCurrentDate(new Date()); // Update tanggal saat ini setelah pengiriman berhasil
    } catch (error) {
      alert('Gagal menambahkan data pendaftaran. Silakan coba lagi.');
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Navbar />
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />

          {/* Tambahkan label untuk menampilkan tanggal pendaftaran */}
          <label className={styles.label}>Tanggal Pendaftaran:</label>
          <p className={styles.date}>{currentDate.toLocaleDateString()}</p>

          {/* Sisanya kode input lainnya */}
          {/* ... */}
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pendaftaran;
