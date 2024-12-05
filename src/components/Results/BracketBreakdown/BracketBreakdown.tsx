import { BracketBreakdownProps } from '../../../types';
import styles from './BracketBreakdown.module.css';

const BracketBreakdown = ({ bracketDetails }: BracketBreakdownProps) => {
  return (
    <div className={styles.brackets_container}>
      <h4 className={styles.subtitle}>Bracket Breakdown</h4>
      <div className={styles.grid_header}>
        <span>Bracket</span>
        <span>Rate</span>
        <span>Taxable Amount</span>
        <span>Tax</span>
      </div>
      {bracketDetails?.map((bracket, index) => (
        <div key={index} className={styles.grid_row}>
          <span>${bracket.min.toLocaleString()} - ${bracket.max.toLocaleString()}</span>
          <span>{bracket.rate.toFixed(2)}%</span>
          <span>${bracket.taxableAmount.toFixed(2)}</span>
          <span>${bracket.bracketTax.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default BracketBreakdown;
