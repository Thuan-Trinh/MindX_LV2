import { useState } from 'react';
import './App.css';
import cardDetail from './cardInfor';


import Card from './Card'
import Modal from '../src/modal/Modal'

function App() {
  const [cards, setCards] = useState(cardDetail);

  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleImageClick = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCard((card) => ({
      ...card,
      [name]: value,
    }));
  };
  const handleSave = () => {
    setCards((item) =>
      item.map((card) =>
        card.tag === selectedCard.tag ? selectedCard : card
      )
    );
    handleCloseModal();
  };
  return (
    <div className='listCard'>
      {showModal && selectedCard &&
        <Modal
          handleClose={handleCloseModal}
        >
          <div className="card-content">
            <img src={selectedCard.image} alt={selectedCard.tag} />
            <p>
              Tên: <input type="text" name='name' value={selectedCard.name} className='itemName' onChange={handleChange} />
            </p>

            <div className="detail">
              <p>Class:
                <br />
                <input type='text' className={selectedCard.cardClass} value={selectedCard.cardClass} name='cardClass' onChange={handleChange} />
                {selectedCard.cardClass2 && (<input type='text' className={selectedCard.cardClass2} value={selectedCard.cardClass2} name='cardClass2' onChange={handleChange} />)}
              </p>
            </div>
            <button onClick={handleSave}>Save</button>
          </div>
        </Modal>
      }
      {cards.map((item) => (
        <Card
          key={item.tag}
          handleChange={setSelectedCard}
          handleOpen={() => handleImageClick(item)}
          image={item.image}
          tag={item.tag}
          name={item.name}
          cardClass={item.cardClass}
          cardClass2={item.cardClass2}
          age={item.age}
        />
      ))}
    </div >
  )
}

export default App;


