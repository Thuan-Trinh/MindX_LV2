import React from 'react'
import './Card.css';

const Card = ({ handleClick, tag, image, name, cardClass, cardClass2, age }) => {
    const cardInfo = { tag, image, name, cardClass, cardClass2, age };
    return (
        <>
            <div className='cardList'>
                <img
                src={image}
                alt={name}
                onClick={()=>handleClick(cardInfo)} />
                <span className='tag'>{tag}</span>
                <p className='itemName'>{name}</p>
                <div className="age">{age > 15 ? 'Mature' : 'Child'}</div>
                <div className="cardClass">
                    <div className={cardClass}><span>{cardClass}</span></div>
                    <div className={cardClass2}><span>{cardClass2}</span></div>
                </div>
            </div>
        </>
    )
}

export default Card