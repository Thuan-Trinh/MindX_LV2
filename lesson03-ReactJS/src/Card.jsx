import './Card.css';

//Truyền tham số gì cũng được
//thậm chí truyền vào html, function, object,...
//nếu như sử dụng theo hrml là lồng thẻ vào tỏng thẻ
//Truyền element bthg
const Card = (props) => {
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
            {props.sayHello}
            <div className="name">Name: {props.name}</div>
            <div className="age">Age: {props.age}</div>
            {props.children}
        </div>
    );
};

export default Card;