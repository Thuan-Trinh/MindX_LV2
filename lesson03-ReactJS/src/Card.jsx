import { useState } from 'react';
import './Card.css';

//Truyền tham số gì cũng được
//thậm chí truyền vào html, function, object,...
//nếu như sử dụng theo hrml là lồng thẻ vào tỏng thẻ
//Truyền element bthg
const Card = (props) => {
    const [count, setCount] = useState(0);
    const addPlus = () => {
        setCount(count + 1);
    };
    const minusItem = () => {
        setCount(count - 1);
    };
    const [person, setPerson] = useState({
        name: "thuan"
    })
   
    console.log(props);
    return (
        //Chỉ được trả về 1 thẻ duy nhất, trong thẻ có thẻ chứ không được tách thành 2 thẻ riêng
        <div className="card" style={{
            color: 'white',
            backgroundColor: 'orange',
            border: "none",
            borderRadius: '12px'
        }}
        >
            {/* {props.sayHello}
            <div className="name">Name: {person.name}</div>
            <div className="age">Age: {props.age}</div>
            <br />
            <span>Đếm: {count}</span>
            <br />
            <br />
            <button onClick={addPlus}>Plus</button>
            <button onClick={
                () => {
                    person.name = 'Thuy';
                    setPerson({ ...person });
                }
            }>update name</button> */}

            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Card;