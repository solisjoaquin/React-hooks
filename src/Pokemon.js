import React, { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemon, setChar] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(data => setChar(data.results));
  }, []);

  return (
    <div>
      {pokemon.map(char => (
        <h2>{char.name}</h2>
      ))}
    </div>
  );
}
