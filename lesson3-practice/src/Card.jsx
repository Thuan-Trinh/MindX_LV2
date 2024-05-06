import './Card.css';
const Card = (props) => {
    return (
        //Chỉ được trả về 1 thẻ duy nhất, trong thẻ có thẻ chứ không được tách thành 2 thẻ riêng
        <div className="card">
            <div className="image">
                <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png" alt="" />
            </div>
            <div className="tag">{props.tag}</div>
            <div className="name">{props.name}</div>
            <div className='detail'>
                <div>{props.detail1}</div>
                <div>{props.detail2}</div>
            </div>
        </div>
    )
}
export default Card