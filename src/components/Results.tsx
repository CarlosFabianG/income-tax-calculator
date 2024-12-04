import styles from './Results.module.css';

interface ResultsProps {
  calculationResults?: any;
}

const Results: React.FC<ResultsProps> = ({ calculationResults }) => {
  return(
    <div className={styles.results_container}>
      <h3 className={styles.title}>Tax Calculation Results</h3>
      <div className={styles.result_item}>
        <span>Marginal Tax Rate:</span>
        <span className={styles.value}>{6858949}%</span>
      </div>
      <div className={styles.result_item}>
        <span>Total Federal Tax:</span>
        <span className={styles.value}>${7474838374}</span>
      </div>
      <div className={styles.result_item}>
        <span>Effective Tax Rate:</span>
        <span className={styles.value}>{4737383847}%</span>
      </div>
    </div>
  );
};

export default Results;
