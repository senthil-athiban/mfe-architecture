import React from 'react';
import './index.css';
import './styles.css';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      <p className="text-xl font-bold underline">
      Hello world!
    </p>
      <p className='bg-red-100'>hello nice</p>
      <Input />
    </div>
  );
}

export default App;
