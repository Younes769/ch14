import React from "react";
import Pokiinfo from "./Pokiinfo.jsx";


const pokis = [
  { id: 1, name: "Pikachu", type: "Electric", pic: "https://img.pokemondb.net/sprites/home/normal/pikachu.png" },
  { id: 2, name: "Charmander", type: "Fire", pic: "https://img.pokemondb.net/sprites/home/normal/charmander.png" },
  { id: 3, name: "Squirtle", type: "Water", pic: "https://img.pokemondb.net/sprites/home/normal/squirtle.png" },
  { id: 4, name: "Bulbasaur", type: "Grass", pic: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png" },
  { id: 5, name: "Jigglypuff", type: "Normal", pic: "https://img.pokemondb.net/sprites/home/normal/jigglypuff.png" },
  { id: 6, name: "Meowth", type: "Normal", pic: "https://img.pokemondb.net/sprites/home/normal/meowth.png" },
  { id: 7, name: "Psyduck", type: "Water", pic: "https://img.pokemondb.net/sprites/home/normal/psyduck.png" },
  { id: 8, name: "Snorlax", type: "Normal", pic: "https://img.pokemondb.net/sprites/home/normal/snorlax.png" },
  { id: 9, name: "Magikarp", type: "Water", pic: "https://img.pokemondb.net/sprites/home/normal/magikarp.png" },
  { id: 10, name: "Eevee", type: "Normal", pic: "https://img.pokemondb.net/sprites/home/normal/eevee.png" },
  { id: 11, name: "Mewtwo", type: "Psychic", pic: "https://img.pokemondb.net/sprites/home/normal/mewtwo.png" },
  { id: 12, name: "Mew", type: "Psychic", pic: "https://img.pokemondb.net/sprites/home/normal/mew.png" },
];

export function Poki() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Pokémons</h1>
      <div className="gallery">
        {pokis.map((pokemon) => (
          <Pokiinfo
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            pic={pokemon.pic}
          />
        ))}
      </div>
    </div>
  );
}

export default Poki;
