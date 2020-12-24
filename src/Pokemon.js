import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "./context/ThemeContext";

export default function Pokemon() {
  const [pokemon, setChar] = useState([]);
  const color = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(data => setChar(data.results));
  }, []);

  return (
    <div>
      {pokemon.map(char => (
        <h2 style={{ color }}>{char.name}</h2>
      ))}
    </div>
  );
}
