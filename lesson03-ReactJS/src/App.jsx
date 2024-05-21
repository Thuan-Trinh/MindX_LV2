import { useState } from 'react';
import './App.css';
import Input from './Input.jsx';
import Card from './Card.jsx';

function App() {
  const [fullName, setFullName] = useState('xin chao');
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    setFullName(e.target.value);
  }
  return (
    <div >
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <Input fullName={fullName} handleChange={handleChange} ></Input>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default App;
