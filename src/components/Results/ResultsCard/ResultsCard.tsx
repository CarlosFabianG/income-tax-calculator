import { ResultsCardProps } from '../../../types';
import styles from './ResultsCard.module.css';

const ResultsCard = ({ marginalRate, totalTax, effectiveTaxRate }: ResultsCardProps) => {
  return (
    <div className={styles.results_card}>
      <h3 className={styles.title}>Tax Calculation Results</h3>
      <div className={styles.result_item}>
        <span>Marginal Tax Rate:</span>
        <span className={styles.value}>{marginalRate}%</span>
      </div>
      <div className={styles.result_item}>
        <span>Total Federal Tax:</span>
        <span className={styles.value}>${totalTax}</span>
      </div>
      <div className={styles.result_item}>
        <span>Effective Tax Rate:</span>
        <span className={styles.value}>{effectiveTaxRate}%</span>
      </div>
    </div>
  );
};

export default ResultsCard;
 