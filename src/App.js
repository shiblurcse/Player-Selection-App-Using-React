import './App.css';
import { useEffect, useState } from 'react';
import fakeData from './fakeData/fakeData.json';
import Players from './Components/Players/Players';
import Selected from './Components/Players/SelectedPlayer/Selected';
import Header from './Components/Players/Header/Header';

function App() {
  const [players, setPlayer] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState([])

  useEffect(() => {
    setPlayer(fakeData)
    console.log(fakeData)
  }, [])

 const handleAddPlayer = (player) => {
   const newSelectedPlayer = [...selectedPlayer, player]
   setSelectedPlayer(newSelectedPlayer)
 }
  return (
    <div className="App">
      <Header></Header>
      <h1 className="dhaka">Dhaka Dynamites</h1>
      <h3 className="desh">জিতবে ঢাকা দেখবে দেশ</h3>
      <h1>Total Player: {players.length} </h1>
      <Selected selectedPlayer={selectedPlayer}></Selected>
      <img src= ""alt=""/>
      <ul>
        {
          players.map(player => <Players player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Players>)
        }
      </ul>
    </div>
  );
}

export default App;
