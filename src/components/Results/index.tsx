import ResultsCard from './ResultsCard/ResultsCard';
import BracketBreakdown from './BracketBreakdown/BracketBreakdown';
import Spinner from '../Spinner';
import styles from './Results.module.css';

interface ResultsProps {
  calculationResults?: any | null;
  isLoading: boolean;
  error?: boolean;
}

const Results = ({ calculationResults, isLoading, error }: ResultsProps) => {
  if (isLoading) {
    return (
      <div className={styles.results_container}>
        <Spinner />
      </div>
    );
  }

  if (error || !calculationResults) {
    return (
      <div className={styles.results_container}>
        <p className={styles.text_instructions}>Enter an income and a year to see tax calculation details</p>
      </div>
    );
  }

  return (
    <div className={styles.results_container}>
      <ResultsCard 
        marginalRate={calculationResults.marginalRate}
        totalTax={calculationResults.totalTax}
        effectiveTaxRate={calculationResults.effectiveTaxRate}
      />
      {calculationResults.bracketDetails && (
        <BracketBreakdown bracketDetails={calculationResults.bracketDetails} />
      )}
    </div>
  );
};

export default Results;
