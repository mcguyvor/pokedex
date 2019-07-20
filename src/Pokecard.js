import pokedex from './Pokedex'
import React,{Component} from 'react'
import  './Pokecard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
class Pokecard extends Component{
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return(
            <div className = "Pokecard">
                <div className ="center">       
                        <h3 className="name">{this.props.name}</h3>
                        <img src = {imgSrc} alt={this.props.name} className="imgSize"/>
                        <p className="des">Type : {this.props.type} </p>
                        <p className="des">EXP : {this.props.base_experience}</p>
                </div>
          </div>


        );
    }
        
       
     
    }

export default Pokecard;