import React, { Component } from 'react'
import {pokedexs, tobeuse, tobeusetwo} from './Pokedex'

class Pokegame extends Component{
    render(){
        let scorefirst = []; 
        scorefirst= tobeuse.map((p)=>
             p.base_experience
        );
       let arrsumfirst = function(arr){
            return arr.reduce(function(a,b){
              return a + b
            }, 0);
          }

        return(
            
            <div>
                <h1>Pokegame!</h1>
                
                {console.log(arrsumfirst(scorefirst))}
                
                
            </div>
        );
    }
}

export default Pokegame;
