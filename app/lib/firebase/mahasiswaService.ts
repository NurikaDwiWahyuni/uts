// mahasiswaService.ts

import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { firestore } from './init'; // Pastikan Anda sudah menginisialisasi Firebase Firestore

// Function to retrieve data from the "mahasiswa" collection
export const retrieveDataPendaftaran = async () => {
    try {
      const mahasiswaCollection = collection(firestore, 'mahasiswa');
      const snapshot = await getDocs(mahasiswaCollection);
      const data = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          name: docData.name,
          nim: docData.nim,
          email: docData.email,
          judulTA: docData.judulTA,
          tipeTA: docData.tipeTA,
          kategoriTA: docData.kategoriTA,
          dosenPembimbing1: docData.dosenPembimbing1,
          dosenPembimbing2: docData.dosenPembimbing2,
          status: docData.status, // Menambahkan data status
        };
      });
      return data;
    } catch (error) {
      throw new Error('Failed to retrieve registration data from the database');
    }
  };
  

// Function to update registration status
export const updateRegistrationStatus = async (registrationId: string, newStatus: string, note?: string) => {
  try {
    const registrationRef = doc(firestore, 'mahasiswa', registrationId);
    await updateDoc(registrationRef, {
      status: newStatus,
      note: newStatus === 'rejected' ? note : '', // Set note only if status is rejected
    });
  } catch (error) {
    throw new Error('Gagal memperbarui status pendaftaran');
  }
};
