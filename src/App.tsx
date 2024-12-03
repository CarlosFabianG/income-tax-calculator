import { useState, useEffect } from 'react';
import Form from './components/form';

import './App.css';

function App() {
  const [ error, setError ] = useState<string | null>(null);

  const onSubmit = () => {
    console.log('Submit!!!!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tax Annual Income
        </h1>
      </header>
      {error && <p>This is and error!!</p>}
      <Form onSubmit={onSubmit}/>
      <footer>Made with ❤️ in Mexico</footer>
    </div>
  );
};

export default App;
