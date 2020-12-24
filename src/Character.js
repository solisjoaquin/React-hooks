import React, { useState, useEffect } from "react";

export default function Character() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setChar(data.results));
  }, []);

  return (
    <div>
        {char.map(char=>(
          <h2>{char.name}</h2>
        ))}
    </div>
  );
}
