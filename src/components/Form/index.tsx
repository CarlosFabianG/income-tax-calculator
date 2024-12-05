import { useState } from 'react';
import Alert from '../Alert';
import styles from './Form.module.css';

interface FormProps {
  error: boolean;
  setError: (error: boolean) => void;
  submit: (year: string, income: string) => void;
}

function Form({ submit, error, setError }: FormProps) {
  const [income, setIncome] = useState('');
  const [year, setYear] = useState('');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const isFormValid = income.trim() !== '' && 
    year.trim() !== '' && 
    parseFloat(income) > 0;

  const handleSubmit = () => {
    setAttemptedSubmit(true);
    if (isFormValid) {
      submit(income, year);
    }
  };

  const getValidationMessage = () => {
    if (!income.trim() || !year.trim()) {
      return '💡 Please fill in all fields to calculate your taxes';
    }
    if (parseFloat(income) <= 0) {
      return '💡 Please enter your annual income (must be greater than $0)';
    }
    return '';
  };

  return (
    <div className={styles.form_container} data-testid='form'>
      <label htmlFor='Income'>Annual Income (USD)💵</label>
      <div className={styles.input_container}>
        <span className={styles.currency_symbol}>$</span>
        <input 
          value={income} 
          onChange={(e) => {
            setIncome(e.target.value);
          }} 
          type='number'
          inputMode='decimal'
          placeholder='0.00'
          name='Income'
          aria-label='Annual income in US dollars'
          
        />
      </div>
      <label htmlFor="Year">Year 🗓️</label>
      <select 
        value={year}
        onChange={(e) => setYear(e.target.value)}
        name='Year'
      >
        <option value=''>Select a year</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
      {attemptedSubmit && !isFormValid && (
        <p className={styles.validationMessage}>{getValidationMessage()}</p>
      )}
      {error && (
        <Alert 
          message={'We’re having trouble right now. Please try again later.'}
          type="error"
          onClose={() => {
            setError(false);
          }} 
        />
      )}
      <button 
        className={styles.submitButton} 
        onClick={handleSubmit} 
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
