import { useState } from 'react';
import { decodeVin } from '../../api/nhtsa';
import VinForm from '../../components/VinForm/VinForm';
import styles from './HomePage.module.css';
import type { DecodeResult } from '../../types/vin';
import DecodeResults from '../../components/DecodeResults/DecodeResults';
import DecodeHistory from '../../components/DecodeHistory/DecodeHistory';

function HomePage() {
  const [decodedResults, setDecodedResults] = useState<DecodeResult[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleDecode = async (vin: string) => {
    try {
      setLoading(true);
      setStatusMessage('');
      const data = await decodeVin(vin);
      setStatusMessage(data.Message);
      const filteredResults = data.Results.filter(
        result => result.Value !== null && result.Value.trim() !== '',
      );

      setDecodedResults(filteredResults);
      setHistory(prevHistory => {
        const updatedHistory = prevHistory.filter(prev => prev !== vin);
        return [vin, ...updatedHistory].slice(0, 3);
      });
    } catch (error) {
      console.error(error);
      setStatusMessage('Failed to decode VIN. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>VIN Decoder</h1>
        <p className={styles.description}>
          Enter a 17-character VIN to decode vehicle information.
        </p>

        <VinForm onDecode={handleDecode} loading={loading} />
        {statusMessage && <p className={styles.message}>{statusMessage}</p>}
      </section>
      <DecodeHistory history={history} onSelectVin={handleDecode} />
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : decodedResults.length > 0 ? (
        <DecodeResults results={decodedResults} />
      ) : null}
    </main>
  );
}

export default HomePage;
