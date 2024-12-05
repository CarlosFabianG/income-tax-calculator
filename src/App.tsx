import { useState } from 'react';
import Form from './components/Form';
import Results from './components/Results';
import { calculateTaxDetails } from './helpers/calculateTaxDetails';
import { API_URL } from './config';
import './App.css';

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

const TAX_CALCULATOR_URL = `${API_URL}/tax-calculator/tax-year/`

function App() {
  const [ error, setError ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [calculationResults, setCalculationResults] = useState<TaxDetails | null>(null);

  const onSubmit = async (income: string, year: string) => {
    try {
      setError(false);
      setIsLoading(true);
      const response = await fetch(TAX_CALCULATOR_URL + year);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const { tax_brackets } = data;
      const taxDetails = await calculateTaxDetails(Number(income), tax_brackets);
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
