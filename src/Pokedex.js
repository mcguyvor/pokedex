import React,{Component} from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
const pokedexs = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  let dex = shuffle(pokedexs);
  let tobeuse = dex.slice(0,4);
  let tobeusetwo = dex.slice(4);
  
  /*  for(let i =0; i<pokedexs.length;i++){
      let idx = Math.floor(Math.random()*(pokedexs.length));
      let used = pokedexs[idx];
      if(!idx<0){
        tobeuse.push(used);
        pokedexs.slice(idx,idx);
      }
    } */
class Pokedex extends Component{

  render(){
    const poke = {
      tobeuse,
      tobeusetwo
      };
      let playerone ;
      playerone = poke.tobeuse.map((p) =>(
        Number(p.base_experience)
      ));
      let playeronescore = 0;
      for(let i =0;i<playerone.length-1;i++){
        playeronescore += playerone[i];
      }
      let playertwo ;
      playertwo = poke.tobeusetwo.map((p)=>(
        Number(p.base_experience)
      ));
      let playertwoscore = 0;
      for(let i =0;i<playertwo.length-1;i++){
        playertwoscore += playertwo[i];
      }
      let playerOneResult;
      let playerTwoResult;
      if(playeronescore>playertwoscore){
        playerOneResult = true;
        playerTwoResult = false;
      }else{
        playerTwoResult = true;
        playerOneResult = false;
      }
      let playerOneMessage;
      if(playerOneResult){
         playerOneMessage = `Player one win with score ${playeronescore}`
      }else{
        playerOneMessage = `Player one lose with score ${playeronescore}`
      }
      let playerTwoMessage;
      if(playerTwoResult){
         playerTwoMessage = `Player two win with score ${playertwoscore}`
      }else{
        playerTwoMessage = `Player two lose with score ${playertwoscore}`
      }

          return(
            <div>
              <div className = "PlayerOne">
                <h2>{playerOneMessage}</h2>
              </div>
              

              <div className="Firsthand"> 
                    {poke.tobeuse.map((p) => (
                      <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                    ))}             
                    {console.log(tobeuse)}
                    
                </div>
              <div className ="PlayerTwo">
                <h2>{playerTwoMessage}</h2>

              </div>
              <div className="Secondhand">
                {poke.tobeusetwo.map((p) => (
                  <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                ))}
                {console.log('test')}
              </div>
            </div>
              
          );          
  }
}
    
    
export default Pokedex;
export {pokedexs, tobeuse, tobeusetwo};