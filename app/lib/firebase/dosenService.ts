// lib/dosenService.ts

import { doc, addDoc, collection } from 'firebase/firestore';
import { firestore } from './init'; // pastikan Anda sudah menginisialisasi Firebase Firestore

// Fungsi untuk menambahkan data dosen ke Firestore
export const tambahDosen = async (data: {
  nama: string;
  nip: string;
  jenisKelamin: string;
  keahlian: string;
  kuota: number;
}) => {
  try {
    const dosenRef = collection(firestore, 'dosen');
    await addDoc(dosenRef, data);
  } catch (error) {
    throw new Error('Gagal menambahkan data dosen ke database');
  }
};
