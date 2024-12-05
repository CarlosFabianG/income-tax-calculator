import ResultsCard from './ResultsCard/ResultsCard';
import BracketBreakdown from './BracketBreakdown/BracketBreakdown';
import Spinner from '../Spinner';
import styles from './Results.module.css';

interface ResultsProps {
  calculationResults: any | null;
  isLoading: boolean;
}

const Results = ({ calculationResults, isLoading }: ResultsProps) => {
  return isLoading ? (
    <Spinner />
  ) : (
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
