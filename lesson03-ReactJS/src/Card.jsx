import './Card.css';
const Card = (props) => {
    return (
        //Chỉ được trả về 1 thẻ duy nhất, trong thẻ có thẻ chứ không được tách thành 2 thẻ riêng
        <div className="card">
            <div className="name">Name: {props.name}</div>
            <div className="age">Age: {props.age}</div>
        </div>
    )
}
export default Card