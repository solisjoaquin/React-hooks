import React, { useState, useEffect, useReducer } from "react";

const initialState = {
  favorites: []
};

const fovariteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

export default function Character() {
  const [char, setChar] = useState([]);
  const [favorites, dispatch] = useReducer(fovariteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setChar(data.results));
  }, []);

  const handleClick = favorite => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <div>
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      <h1>Lista de API</h1>
      {char.map(char => (
        <div className="item" key={char.id}>
          <h2>{char.name}</h2>
          <button type="button" onClick={() => handleClick(char)}>
            {" "}
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
}
