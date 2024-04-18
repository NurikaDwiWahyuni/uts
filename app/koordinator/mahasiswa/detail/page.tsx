'use client'

import { useEffect, useState } from 'react';
import { retrieveDataPendaftaran, updateRegistrationStatus } from '../../../lib/firebase/mahasiswaService';
import styles from './detail.module.css';
import Navbar from '../../navbar';

const DetailPendaftaran: React.FC = () => {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveDataPendaftaran();
        setRegistrations(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateStatus = async (registrationId: string) => {
    try {
      if (selectedStatus) {
        await updateRegistrationStatus(registrationId, selectedStatus, selectedStatus === 'rejected' ? note : '');
        const updatedData = registrations.map(registration => {
          if (registration.id === registrationId) {
            return { ...registration, status: selectedStatus };
          }
          return registration;
        });
        setRegistrations(updatedData);
      } else {
        console.error('Please select a status.');
      }
    } catch (error) {
      console.error('Error updating registration status:', error);
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Navbar />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={styles['daftar-table']}>
            {registrations.map(registration => (
              <div key={registration.id} className={styles.row}>
                <div className={styles.rowItem}>
                  <strong>Nama:</strong> {registration.name}
                </div>
                <div className={styles.rowItem}>
                  <strong>NIM:</strong> {registration.nim}
                </div>
                <div className={styles.rowItem}>
                  <strong>Email:</strong> {registration.email}
                </div>
                <div className={styles.rowItem}>
                  <strong>Judul TA:</strong> {registration.judulTA}
                </div>
                <div className={styles.rowItem}>
                  <strong>Status:</strong> {registration.status}
                </div>
                {registration.status === 'rejected' && (
                  <div className={styles.rowItem}>
                    <strong>Catatan:</strong> {registration.note}
                  </div>
                )}
                <div className={styles.rowItem}>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button onClick={() => handleUpdateStatus(registration.id)}>
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPendaftaran;