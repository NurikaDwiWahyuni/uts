// lib/dosenService.ts
import { doc, addDoc, collection, getDocs } from 'firebase/firestore';
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

// Fungsi untuk mengambil data dosen dari Firestore
export const retrieveDataDosen = async () => {
  try {
    const dosenCollection = collection(firestore, 'dosen');
    const snapshot = await getDocs(dosenCollection);
    const data = snapshot.docs.map((doc) => {
      const docData = doc.data();
      return {
        id: doc.id,
        nama: docData.nama,
        nip: docData.nip,
        jenisKelamin: docData.jenisKelamin,
        keahlian: docData.keahlian,
        kuota: docData.kuota,
      };
    });
    return data;
  } catch (error) {
    throw new Error('Gagal mengambil data dosen dari database');
  }
};
