import styles from './DecodeHistory.module.css';

interface DecodeHistoryProps {
  history: string[];
  onSelectVin: (vin: string) => void;
}

function DecodeHistory({ history, onSelectVin }: DecodeHistoryProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Recent VINs</h2>

      {history.length === 0 ? (
        <p className={styles.empty}>No recent VINs.</p>
      ) : (
        <ul className={styles.list}>
          {history.map((vin) => (
            <li key={vin} className={styles.item}>
              <button
                className={styles.button}
                type="button"
                onClick={() => onSelectVin(vin)}
              >
                {vin}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default DecodeHistory;