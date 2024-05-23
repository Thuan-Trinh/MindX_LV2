import { useState } from 'react';
import './App.css';
import cardList from './cardInfor.js';
import Card from './Card.jsx';
import Modal from './Modal.jsx';

function App() {
  const [cards, setCards] = useState(cardList);
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchField, setSearchField] = useState('');

  const handleCheckBox = (type) => {
    setChecked(prev => {
      if (prev.includes(type)) {
        return prev.filter(item => item !== type);
      } else if (prev.length < 2) {
        return [...prev, type];
      } else {
        return [prev[1], type];
      }
    });
  }
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
    setChecked([]);
  }
  const handleClickImage = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowModal(true);
    setChecked([cardInfo.cardClass, cardInfo.cardClass2].filter(Boolean));
  }

  const handleNameChange = (newName) => {
    setSelectedCard(prev => ({ ...prev, name: newName }));
  };
  const handleSave = () => {
    if (selectedCard) {
      const index = cards.findIndex(card => card.tag === selectedCard.tag);

      if (index !== -1) {
        const updatedCards = [...cards];
        //update card mới với thông tin cardClass và
        //cardClass2 mới theo mảng checked
        updatedCards[index] = {
          ...selectedCard,
          cardClass: checked[0] || '',
          cardClass2: checked[1] || '',
        };
        setCards(updatedCards);
        handleCloseModal();
        handleNameChange();
      }
    }
  }
  const handleSearch = (e) => {
    setSearchField(e.target.value)
  }
  const filterCards = cards.filter(card=>(
    card.name.trim().toLowerCase().includes(searchField.trim().toLowerCase())
  ))
  return (
    <>
      <input
        type="search"
        placeholder='Nhập tên pokemon'
        value={searchField}
        onChange={handleSearch}
      />
      {showModal && selectedCard &&
        <Modal
          image={selectedCard.image}
          name={selectedCard.name}
          handleClose={handleCloseModal}
          handleCheck={handleCheckBox}
          handleChangeName={handleNameChange}
          handleSave={handleSave}
          checked={checked}
        />
      }
      <div className="list">
        {filterCards.length === 0 ?(
          <p>Không có kết quả</p>
        ):(
        filterCards.map((card) => (
          <Card
            key={card.tag}
            handleClick={handleClickImage}
            tag={card.tag}
            image={card.image}
            name={card.name}
            cardClass={card.cardClass}
            cardClass2={card.cardClass2}
            age={card.age}
          />
        )))}
      </div>
    </>
  )
}

export default App
