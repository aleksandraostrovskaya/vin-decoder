import type { DecodeResult } from '../../types/vin';

import styles from './DecodeResults.module.css';

interface DecodeResultsProps {
  results: DecodeResult[];
}

function DecodeResults({ results }: DecodeResultsProps) {

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Decode Results</h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr key={result.VariableId}>
                <td>{result.Variable}</td>
                <td>{result.Value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


export default DecodeResults;