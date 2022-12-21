import React from "react";
import Card from "../Cards/Card";
import NewPokemonBox from "../New-Pokemon/New-pokemon";

const PokemonList = ({list, getStoredData}) =>{
   
    return(
        <>
            {getStoredData("userToken") ? 
            <>
            <div className="list-container">
                <NewPokemonBox/>
                {
                    list.map((pokemon)=>{
                        let pokemonTypeOne = pokemon.idtype_types[0].type
                        return (
                            <Card key={pokemon.id}
                            type={`${pokemonTypeOne.toLowerCase()}-border ${pokemonTypeOne.toLowerCase()}-color-txt box`} 
                            number={`${pokemon.id}`}
                            pokemon={`${pokemon.pokeurl}`}
                            title={`${pokemonTypeOne.toLowerCase()} name-box`}
                            name={`${pokemon.name}`}/>
                        )
                    })
                }
            </div>
            </>
              :
              <div className="list-container">
             {
                 list.map((pokemon)=>{
                     let pokemonTypeOne = pokemon.idtype_types[0].type
                     return (
                         <Card key={pokemon.id}
                         type={`${pokemonTypeOne.toLowerCase()}-border ${pokemonTypeOne.toLowerCase()}-color-txt box`} 
                         number={`${pokemon.id}`}
                         pokemon={`${pokemon.pokeurl}`}
                         title={`${pokemonTypeOne.toLowerCase()} name-box`}
                         name={`${pokemon.name}`}/>
                     )
                 })
             }
            </div>
            }    
        </>
       
    )
}
export default PokemonList;

