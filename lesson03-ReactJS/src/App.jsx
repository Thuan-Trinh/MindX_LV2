import './App.css';
import Card from './Card.jsx';

function App() {
  
  return (
    <div className='listCard'>
      <h1>Hello World</h1>
      {/* vừa là thẻ mở vừa là thẻ đóng */}
      <Card name='Thuan' age={22} sayHello={<h1>Hello</h1>}>
      </Card>
      <Card name='Thuy' age={25} />
      <Card name='Banh Bao' age='1 month' />
    </div>
  )
};

export default App;
