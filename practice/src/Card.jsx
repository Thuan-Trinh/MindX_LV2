import './Card.css';

const Card = (props) => {
    const onCLick = () => {
        alert(`Bạn vừa click vào ${props.name}`);
    }
    return (
        //Chỉ được trả về 1 thẻ duy nhất, trong thẻ có thẻ chứ không được tách thành 2 thẻ riêng
        <div className="card">
            <div className="image">
                <img src={props.image} alt="img001" />
            </div>
            <div className="tag">{props.tag}</div>
            <div className="name">{props.name}</div>
            <div>{props.age < 20 ? 'Y' : "M"}</div>
            <div className='detail'>
                <div className={props.cardClass}>{props.cardClass}</div>
                <button onClick={onCLick}>Say</button>
                <div className={props.cardClass2}>{props.cardClass2}</div>
            </div>
        </div>
    )
}
export default Card