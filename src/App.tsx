import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  useEffect(() => {
    const getPokemons = async () => {
      const respone = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );

      respone.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        console.log(poke.data);
      });
      console.log(respone.data);
    };
    getPokemons();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon </header>
      </div>
    </div>
  );
};

export default App;
