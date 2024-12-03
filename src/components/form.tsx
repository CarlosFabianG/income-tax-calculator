import { useState } from 'react';
import styles from './form.module.css'

interface Props {
  onSubmit: () => void;
}

function Form({ onSubmit }: Props) {
  const [income, setIncome] = useState(0);
  const [year, setYear] = useState(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <form>
      <div className={styles.form_container}>
        <label htmlFor="Income">Annual Income</label>
        <input value={income} onChange={handleOnChange} type="text" name="Income"/>
        <label htmlFor="Year">Year</label>
        <input value={year} onChange={handleOnChange} type="text" name="Year"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    </form>
  );
};

export default Form;
