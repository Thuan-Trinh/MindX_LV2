import './App.css';
import png001 from "./assets/001.png"
import png002 from "./assets/002.png"
import png003 from "./assets/003-Gmax.png"
import png004 from "./assets/004.png"
import png005 from "./assets/005.png"
import png006 from "./assets/006.png"
import png007 from "./assets/007.png"
import png008 from "./assets/008.png"
import png009 from "./assets/009.png"
import png010 from "./assets/010.png"
import png011 from "./assets/011.png"
import png012 from "./assets/012.png"

import Card from './Card.jsx'

function App() {
  return (
    <div className='listCard'>
      <Card image={png001} tag="#00001" name="Bulbasaur" cardClass='Grass' cardClass2='Poison' age={15} />
      <Card image={png002} tag="#00002" name="Ivysaur" cardClass='Grass' cardClass2='Poison' age={22} />
      <Card image={png003} tag="#00003" name="Venusaur" cardClass='Grass' cardClass2='Poison' age={30} />
      <Card image={png004} tag="#00004" name="Charmander" cardClass='Fire' age={11} />
      <Card image={png005} tag="#00005" name="Charmeleon" cardClass='Fire' age={22} />
      <Card image={png006} tag="#00006" name="Charizard" cardClass='Fire' cardClass2="Flying" age={14} />
      <Card image={png007} tag="#00007" name="Squirtle" cardClass='Water' age={36} />
      <Card image={png008} tag="#00008" name="Wartortle" cardClass='Water' age={19} />
      <Card image={png009} tag="#00009" name="Blastoise" cardClass='Water' age={37} />
      <Card image={png010} tag="#00010" name="Caterpie" cardClass='Bug' age={25} />
      <Card image={png011} tag="#00011" name="Metapod" cardClass='Bug' age={10} />
      <Card image={png012} tag="#00012" name="Butterfree" cardClass='Bug' cardClass2="Flying" age={8} />
    </div>
  )
}

export default App;


