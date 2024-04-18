// StatusDetailPage.tsx
'use client'

import { useEffect, useState } from 'react';
import { retrieveDataPendaftaran } from '../../lib/firebase/mahasiswaService';
import styles from './statusDetail.module.css';
import Navbar from '../navbar';

const StatusDetailPage: React.FC = () => {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Navbar />
        <h2>Status Detail</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {registrations.map((registration) => (
              <div key={registration.id} className={styles.statusItem}>
                <div>
                  <strong>Nama:</strong> {registration.name}
                </div>
                <div>
                  <strong>NIM:</strong> {registration.nim}
                </div>
                <div>
                  <strong>Status:</strong> {registration.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusDetailPage;
