import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getVehicleVariables } from '../../api/nhtsa';
import type { VehicleVariable } from '../../types/vin';

import styles from './VariablePage.module.css';

function VariablePage() {
  const { id } = useParams();
  console.log(id);

  const [variable, setVariable] = useState<VehicleVariable | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVariable = async () => {
      try {
        setLoading(true);

        const data = await getVehicleVariables();

        const foundVariable = data.Results.find(
          variable => variable.ID === Number(id),
        );

        if (!foundVariable) {
          setError('Variable not found.');
          return;
        }

        setVariable(foundVariable);
      } catch (error) {
        console.error(error);
        setError('Failed to load variable details.');
      } finally {
        setLoading(false);
      }
    };

    fetchVariable();
  }, [id]);

  return (
    <main className={styles.container}>
      <Link to='/variables' className={styles.backLink}>
        ← Back to Variables
      </Link>

      {loading && <p className={styles.loading}>Loading...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && variable && (
        <section className={styles.card}>
          <h1 className={styles.title}>{variable.Name}</h1>

          <div className={styles.info}>
            <p>
              <strong>ID:</strong> {variable.ID}
            </p>

            <p>
              <strong>Group:</strong> {variable.GroupName}
            </p>

            <p>
              <strong>Data Type:</strong> {variable.DataType}
            </p>
          </div>

          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: variable.Description,
            }}
          />
        </section>
      )}
    </main>
  );
}

export default VariablePage;
