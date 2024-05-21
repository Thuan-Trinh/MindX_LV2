import { useState } from 'react';
import './App.css';
import ShowNumber from './ShowNumber.jsx';

function App() {
  const [isFilter, setIsFilter] =useState(false);
  const [person, setPerson] = useState([
    {
      fullName: 'Thuan',
      age: 5
    },
    {
      fullName: 'Thuy',
      age: 15
    }
  ]);

  return (
    <>
      <h1>Hello!</h1>
      <input
      type="checkbox"
      id='filter' 
      checked = {isFilter}
      onChange={()=>{
        setIsFilter(!isFilter);
      }}
      />{' '}
      <label htmlFor="filter">filter by: {"<=5"}</label>
      {person
        .filter((item)=>{
          return isFilter ? item.age <=5 : true;
        })
        .map((item) => (
          <ShowNumber person={item} />
        ))
        //sử dụng slice để phân trang
      }
    </>
  );
}

export default App;
