import { useState } from 'react';
import './App.css';
import cardDetail from './cardInfor';
// import png001 from "./assets/001.png"
// import png002 from "./assets/002.png"
// import png003 from "./assets/003-Gmax.png"
// import png004 from "./assets/004.png"
// import png005 from "./assets/005.png"
// import png006 from "./assets/006.png"
// import png007 from "./assets/007.png"
// import png008 from "./assets/008.png"
// import png009 from "./assets/009.png"
// import png010 from "./assets/010.png"
// import png011 from "./assets/011.png"
// import png012 from "./assets/012.png"

import Card from './Card'
import Modal from '../src/modal/Modal'

function App() {
  const [cards] = useState(cardDetail);
  // const [image001, setImage001] = useState({
  //   image: png001,
  //   tag: "#00001",
  //   name: "Bulbasaur",
  //   cardClass: 'Grass',
  //   cardClass2: 'Poison',
  //   age: 15,
  // });
  // const [image002, setImage002] = useState({
  //   image: png002,
  //   tag: "#00002",
  //   name: "Ivysaur",
  //   cardClass: 'Grass',
  //   cardClass2: 'Poison',
  //   age: 22,
  // });
  // const [image003, setImage003] = useState({
  //   image: png003,
  //   tag: "#00003",
  //   name: "Venusaur",
  //   cardClass: 'Grass',
  //   cardClass2: 'Poison',
  //   age: 30,
  // });
  // const [image004, setImage004] = useState({
  //   image: png004,
  //   tag: "#00004",
  //   name: "Charmander",
  //   cardClass: 'Fire',
  //   cardClass2: '',
  //   age: 11,
  // });

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

  return (
    <div className='listCard'>
      {showModal && selectedCard &&
        <Modal
          handleClose={handleCloseModal}
        >
          <div className="card-content">
            <img src={selectedCard.image} alt={selectedCard.tag} />
            <p>{selectedCard.name}</p>
            <div className="detail">
              <span className={selectedCard.cardClass}>{selectedCard.cardClass}</span>
              {selectedCard.cardClass2 && <span className={selectedCard.cardClass2}>{selectedCard.cardClass2}</span>}
            </div>
          </div>
        </Modal>
      }
      {cards.map((item) => (
        <Card
          key={item.tag}
          handleOpen={() => handleImageClick(item)}
          image={item.image}
          tag={item.tag}
          name={item.name}
          cardClass={item.cardClass}
          cardClass2={item.cardClass2}
          age={item.age}
        />
      ))}

      {/* khi click vào btn thì sẽ đổi showModal thành true */}
      {/* <Card
        handleOpen={() => handleImageClick(image001)}
        image={image001.image}
        tag={image001.tag}
        name={image001.name}
        cardClass={image001.cardClass}
        cardClass2={image001.cardClass2}
        age={image001.age}
      />

      <Card
        handleOpen={() => handleImageClick(image002)}
        image={image002.image}
        tag={image002.tag}
        name={image002.name}
        cardClass={image002.cardClass}
        cardClass2={image002.cardClass2}
        age={image002.age}
      />

      <Card
        handleOpen={() => handleImageClick(image003)}
        image={image003.image}
        tag={image003.tag}
        name={image003.name}
        cardClass={image003.cardClass}
        cardClass2={image003.cardClass2}
        age={image003.age} />

      <Card
        handleOpen={() => handleImageClick(image004)}
        image={image004.image}
        tag={image003.tag}
        name={image004.name}
        cardClass={image004.cardClass}
        cardClass2={image004.cardClass2}
        age={image004.age}
      /> */}
      {/* 
      <Card image={png005} tag="#00005" name="Charmeleon" cardClass='Fire' age={22} />
      <Card image={png006} tag="#00006" name="Charizard" cardClass='Fire' cardClass2="Flying" age={14} />
      <Card image={png007} tag="#00007" name="Squirtle" cardClass='Water' age={36} />
      <Card image={png008} tag="#00008" name="Wartortle" cardClass='Water' age={19} />
      <Card image={png009} tag="#00009" name="Blastoise" cardClass='Water' age={37} />
      <Card image={png010} tag="#00010" name="Caterpie" cardClass='Bug' age={25} />
      <Card image={png011} tag="#00011" name="Metapod" cardClass='Bug' age={10} />
      <Card image={png012} tag="#00012" name="Butterfree" cardClass='Bug' cardClass2="Flying" age={8} /> */}
    </div >
  )
}

export default App;


