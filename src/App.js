import React, {Component} from 'react';
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'
import './App.css';
import Pokegame from'./Pokegame'

class App extends Component {
  render(){
    return (
     <div>
       {/* <Pokegame/> */}
      <Pokedex/>
      
    </div>
        
  );
    }
  }
  export default App;
