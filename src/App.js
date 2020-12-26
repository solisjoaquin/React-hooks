import React from "react";
import "./style.css";
import Character from "./Character";
import Pokemon from "./Pokemon";
import Search from "./Search";

export default function App() {
  return (
    <div>
      <Pokemon />
      <Character />
      <Search />
    </div>
  );
}
