import { useState } from 'react';
import styles from './VinForm.module.css';

interface VinFormProps {
  onDecode: (vin: string) => void | Promise<void>;
  loading: boolean;
}

function VinForm({ onDecode, loading }: VinFormProps) {
  const [vin, setVin] = useState('');
  const [error, setError] = useState('');

  const validateVin = (vin: string): string | null => {
    if (vin.trim() === '') {
      return 'VIN is required.';
    }

    if (vin.length !== 17) {
      return 'VIN must contain exactly 17 characters.';
    }

    if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) {
      return 'VIN contains invalid characters.';
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateVin(vin);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');

    await onDecode(vin);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toUpperCase();

    setVin(inputValue);

    if (error) {
      setError('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor='vin'>
        VIN Code
      </label>

      <input
         className={`${styles.input} ${error ? styles.inputError : ''}`}
        type='text'
        id='vin'
        placeholder='Enter 17-character VIN'
        maxLength={17}
        value={vin}
        onChange={handleChange}
      />

       {error && <p className={styles.error}>{error}</p>}

      <button className={styles.button} type='submit'>
        {loading ? 'Decoding...' : 'Decode'}
      </button>
    </form>
  );
}

export default VinForm;
