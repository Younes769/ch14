import React from "react";

 function Pokiinfo({ pic, name, type }) {
  return (
    <div className="pokemon-card">
      <img src={pic} alt={name} className="pokemon-image" />
      <h2 className="pokemon-name">{name}</h2>
      <span className="type">{type}</span>
      
    </div>
  );
}

export default Pokiinfo;