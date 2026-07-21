import { useEffect, useState } from 'react';
import { getVehicleVariables } from '../../api/nhtsa';
import type { VehicleVariable } from '../../types/vin';
import { Link } from 'react-router-dom';

import styles from './VariablesPage.module.css';

function VariablesPage() {
  const [variables, setVariables] = useState<VehicleVariable[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVariables = async () => {
      try {
        setLoading(true);

        const data = await getVehicleVariables();
        setVariables(data.Results);
      } catch (error) {
        console.error(error);
        setError('Failed to load vehicle variables.');
      } finally {
        setLoading(false);
      }
    };

    fetchVariables();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Vehicle Variables</h1>

      <p className={styles.description}>
        Browse all variables available in the NHTSA VIN Decoder API.
      </p>

      {loading && <p className={styles.loading}>Loading...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <div className={styles.grid}>
          {variables.map(variable => (
            <Link
              key={variable.ID}
              to={`/variables/${variable.ID}`}
              className={styles.card}
            >
              <h2 className={styles.cardTitle}>{variable.Name}</h2>

              <p className={styles.group}>
                <strong>Group:</strong> {variable.GroupName}
              </p>

              <p className={styles.type}>
                <strong>Type:</strong> {variable.DataType}
              </p>

              <p
                className={styles.descriptionText}
                dangerouslySetInnerHTML={{
                  __html: variable.Description,
                }}
              />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default VariablesPage;
