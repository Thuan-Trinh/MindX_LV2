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
      {/* vừa là thẻ mở vừa là thẻ đóng */}
      {/* <Card name='Thuan' age={22} sayHello={<h1>Hello</h1>}>
      </Card>
      <Card name='Thuy' age={25} />
      <Card name='Banh Bao' age='1 month' /> */}
      <form onSubmit={handleSubmit}>
        <Input fullName={fullName} handleChange={handleChange} ></Input>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default App;
