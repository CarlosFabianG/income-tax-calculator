import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader} data-testid='loading'></div>
    </div>
  );
};

export default Spinner;
