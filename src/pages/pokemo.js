import { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const randomPokemon = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      const pokemonDetails = await axios.get(randomPokemon.url);
      setPokemonData(pokemonDetails.data);
    };
    fetchPokemonData();
  }, []);

  const handleRefresh = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    const randomPokemon = response.data.results[Math.floor(Math.random() * response.data.results.length)];
    const pokemonDetails = await axios.get(randomPokemon.url);
    setPokemonData(pokemonDetails.data);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Pokemon</h2>
      {pokemonData ? (
        <div>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="w-32 h-32 mb-4"
          />
          <h3 className="text-xl font-bold">{pokemonData.name}</h3>
          <p>Type: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
          <p>Height: {pokemonData.height} ft</p>
          <p>Weight: {pokemonData.weight} lbs</p>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Actualizar
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default PokemonPage;