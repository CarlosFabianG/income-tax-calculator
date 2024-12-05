import { useState } from 'react';
import Form from './components/Form';
import Results from './components/Results';
import { calculateTaxDetails } from './helpers/calculateTaxDetails';
import './App.css';
import { fetchTaxBrackets } from './services/taxService';

interface TaxDetails {
  totalTax: string;
  marginalRate: number;
  effectiveTaxRate: string;
  bracketDetails: {
    min: number;
    max: number;
    rate: number;
    taxableAmount: number;
    bracketTax: number;
  }[];
}

function App() {
  const [ error, setError ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [calculationResults, setCalculationResults] = useState<TaxDetails | null>(null);

  const onSubmit = async (income: string, year: string) => {
    try {
      setError(false);
      setIsLoading(true);
      const taxBrackets = await fetchTaxBrackets(year);
      const taxDetails = await calculateTaxDetails(Number(income), taxBrackets);
      setCalculationResults(taxDetails);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Income Tax Calculator
        </h1>
      </header>
      <section>
        <Form submit={onSubmit} error={error} setError={setError} />
        {error || !calculationResults ? <Results error={error} isLoading={isLoading} /> 
        : 
        <Results isLoading={isLoading} calculationResults={calculationResults}/>}
      </section>
      <footer>Made with ❤️ in Mexico by <b><a href='https://www.carlosfabian.dev/about'>Carlos Fabian</a></b></footer>
    </div>
  );
}

export default App;
