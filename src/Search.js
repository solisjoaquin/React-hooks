import React, { useState, useEffect, useMemo } from "react";

export default function Search() {
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setChar(data.results));
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  //const filterUser = char.filter(user => {
  //return user.name.toLowerCase().includes(search.toLowerCase());
  //});

  const filterUser = useMemo(
    () =>
      char.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [char, search]
  );

  return (
    <div>
      <h1>Buscador</h1>

      <div>
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      {filterUser.map(char => (
        <h2>{char.name}</h2>
      ))}
    </div>
  );
}
