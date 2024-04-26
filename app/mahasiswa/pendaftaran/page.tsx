'use client'

import { useState } from 'react';
import Navbar from '../navbar';
import styles from './pendaftaran.module.css';
import { retrieveDataPendaftaran } from '../../lib/firebase/mahasiswaService';

const Pendaftaran: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    email: '',
    judul: '',
    tipe: '', // Tambahkan state untuk tipe TA
    kategori: '', // Tambahkan state untuk kategori TA
    dosenPembimbing1: '', // Tambahkan state untuk dosen pembimbing 1
    dosenPembimbing2: '', // Tambahkan state untuk dosen pembimbing 2
  });
  const [file, setFile] = useState<File | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date()); // Menyimpan tanggal saat ini

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    const { nama, nim, email, judul, tipe, kategori, dosenPembimbing1, dosenPembimbing2 } = formData;
    if (!nama || !nim || !email || !judul || !tipe || !kategori || !dosenPembimbing1 || !dosenPembimbing2 || !file) {
      alert('Please fill in all fields and upload a file');
      return;
    }
    // Kirim data ke backend atau lakukan operasi yang diperlukan
    // Misalnya, mengirim data ke server atau menyimpannya di penyimpanan lokal
    try {
      await retrieveDataPendaftaran();
      alert('Data pendaftaran berhasil ditambahkan!');
      // Reset form fields after successful submission
      setFormData({
        nama: '',
        nim: '',
        email: '',
        judul: '',
        tipe: '',
        kategori: '',
        dosenPembimbing1: '',
        dosenPembimbing2: '',
      });
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
          <label className={styles.label} htmlFor="nama">Nama:</label>
          <input
            type="text"
            name="nama"
            required
            value={formData.nama}
            onChange={handleInputChange}
            className={styles.input}
          />
          {/* Tambahkan input untuk email */}
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
          />
          {/* Tambahkan input untuk judul TA */}
          <label className={styles.label} htmlFor="judul">Judul TA:</label>
          <input
            type="text"
            name="judul"
            required
            value={formData.judul}
            onChange={handleInputChange}
            className={styles.input}
          />
          {/* Tambahkan input untuk tipe TA */}
          <label className={styles.label} htmlFor="tipe">Tipe TA:</label>
          <select
            name="tipe"
            required
            value={formData.tipe}
            onChange={handleSelectChange}
            className={styles.select}
          >
            <option value="">Pilih Tipe TA</option>
            <option value="Tipe 1">Tipe 1</option>
            <option value="Tipe 2">Tipe 2</option>
            <option value="Tipe 3">Tipe 3</option>
          </select>
          {/* Tambahkan input untuk kategori TA */}
          <label className={styles.label} htmlFor="kategori">Kategori TA:</label>
          <select
            name="kategori"
            required
            value={formData.kategori}
            onChange={handleSelectChange}
            className={styles.select}
          >
            <option value="">Pilih Kategori TA</option>
            <option value="Kategori 1">Kategori 1</option>
            <option value="Kategori 2">Kategori 2</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
          {/* Tambahkan input untuk dosen pembimbing 1 */}
          <label className={styles.label} htmlFor="dosenPembimbing1">Dosen Pembimbing 1:</label>
          <select
            name="dosenPembimbing1"
            required
            value={formData.dosenPembimbing1}
            onChange={handleSelectChange}
            className={styles.select}
          >
            <option value="">Pilih Dosen Pembimbing 1</option>
            <option value="Dosen 1">Dosen 1</option>
            <option value="Dosen 2">Dosen 2</option>
            <option value="Dosen 3">Dosen 3</option>
          </select>
          {/* Tambahkan input untuk dosen pembimbing 2 */}
          <label className={styles.label} htmlFor="dosenPembimbing2">Dosen Pembimbing 2:</label>
          <select
            name="dosenPembimbing2"
            required
            value={formData.dosenPembimbing2}
            onChange={handleSelectChange}
            className={styles.select}
          >
            <option value="">Pilih Dosen Pembimbing 2</option>
            <option value="Dosen A">Dosen A</option>
            <option value="Dosen B">Dosen B</option>
            <option value="Dosen C">Dosen C</option>
          </select>
          {/* Input untuk file */}
          <label className={styles.label} htmlFor="file">File:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            name="file"
            required
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          {/* Tampilkan tanggal pendaftaran */}
          <label className={styles.label}>Tanggal Pendaftaran:</label>
          <p className={styles.date}>{currentDate.toLocaleDateString()}</p>
          {/* Tombol submit */}
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pendaftaran;
