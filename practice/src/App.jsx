import { useState } from 'react';
import './App.css';
import cardDetail from './cardInfor';


import Card from './Card'
import Modal from '../src/modal/Modal'

function App() {
  const classArr = ['Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug']

  const [cards, setCards] = useState(cardDetail);

  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [checked, setChecked] = useState([]);

  const filteredCards = cards.filter((card) =>
    card.name.trim().toLowerCase().includes(searchField.trim().toLowerCase())
  );

  const handleImageClick = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowModal(true);
    //set trạng thái checked với card được click có chứa cardClass tương ứng
    setChecked([cardInfo.cardClass, cardInfo.cardClass2].filter(Boolean))
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
    //khi close modal thì lại set trạng thái checked về rỗng
    setChecked([])
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
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
      }
    }
  };

  const handleCheck = (e) => {
   const value = e.target.value;
   setChecked(prev=>{
    if (checked.includes(value)){
      //nếu thằng check có chứa value giống value của card, thì trả về mảng checked
      //với điều kiện lọc bỏ tất cả những thằng có giá trị khác value của card
      return checked.filter(item=> item!==value);
    }else if(checked.length<2){
      //nếu độ dài mảng checked nhỏ hơn 2 thì
      //trả về mảng mới thêm thằng value
      return [...prev, value];
    }else return [prev[1],value] //các trường hợp còn lại thì trả về mảng mới gồm
    //giá trị index 1 của mảng cũ (index 0 mới) và giá trị value (index 1 mới)
    //=> mảng luôn luôn chỉ có 2 giá trị 
   })

    
  }

  return (
    <div className="filter">
      <input
        className='searchField'
        type="text"
        placeholder="Tìm kiếm theo tên Pokemon..."
        value={searchField}
        onChange={handleChange}
      />
      <div className='listCard'>
        {showModal && selectedCard &&
          <Modal
            handleClose={handleCloseModal}
          >
            <div className="card-content">
              <img src={selectedCard.image} alt={selectedCard.tag} />
              <p>
                Tên: <input type="text" name='name' value={selectedCard.name} className='itemName' onChange={(e) =>
                  setSelectedCard({ ...selectedCard, name: e.target.value })} />
              </p>

              <div className="detail">
                <p>Class:
                  <br />
                  {/* <input type='text' className='itemClass' value={selectedCard.cardClass} name='cardClass' onChange={(e) =>
                    setSelectedCard({ ...selectedCard, cardClass: e.target.value })} />
                  {selectedCard.cardClass2 && (<input type='text' className='itemClass' value={selectedCard.cardClass2} name='cardClass2' onChange={(e) =>
                    setSelectedCard({ ...selectedCard, cardClass2: e.target.value })} />)} */}

                </p>

                {classArr.map((item, index) => (
                  <div key={index} className='checkInput'>
                    <input
                      type='checkbox'
                      value={item}
                      checked={checked.includes(item)}
                      onChange={handleCheck}
                    /> {item}
                  </div>
                ))
                }

              </div>
              <button onClick={handleSave}>Save</button>
            </div>
          </Modal>
        }

        {filteredCards.length === 0 ? (
          <p className='no-data'>Không tồn tại!</p>
        ) :
          (filteredCards.map((item) => (
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
          )))}
      </div >
    </div >
  )
}

export default App;


