import axiosInstances from './axios';

export const PokemonList = async (page) => {
  try {
    const response = await axiosInstances.PokeApi.get(`pokemon/?limit=9&offset=${page}`);
    const pokemons = response.data.results;

    const detailed = await Promise.all(
      pokemons.map(async (p) => {
        const detail = await PokemonDetail(p.name);
        return {
          id: detail.id,
          name: detail.name,
          image: detail.image
        };
      })
    );

    return {
      content: detailed,
      last: detailed.length < 9 // si trae menos de 9, no hay siguiente página
    };
  } catch (error) {
    throw new Error('Error en listar los Pokémon');
  }
};

// Trae detalle de un Pokémon puntual
export const PokemonDetail = async (pokemonNameOrId) => {
  try {
    const response = await axiosInstances.PokeApi.get(`pokemon/${pokemonNameOrId}`);
    const data = response.data;

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map(t => t.type.name),
      stats: data.stats.map(s => ({
        name: s.stat.name,
        base: s.base_stat
      }))
    };
  } catch (error) {
    throw new Error('Error en obtener el detalle del Pokémon');
  }
};


export const searchPokemon = (pokemonName) => {
  return axiosInstances.PokeApi.get(`pokemon/${pokemonName}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw new Error('Error al buscar el Pókemon: ' + error);
    });
}

export const searchType = async (id) => {
  try {
    const response = await axiosInstances.PokeApi.get(`type/${id}`)
    const pokemons = response.data.pokemon;

    const detailed = await Promise.all(
      pokemons.map(async (p) => {
        const detail = await PokemonDetail(p.pokemon.name);
        return {
          id: detail.id,
          name: detail.name,
          image: detail.image
        };
      })
    );

    return {
      content: detailed,
      last: detailed.length < 9 // si trae menos de 9, no hay siguiente página
    };
  } catch (error) {
    throw new Error('Error en listar los Pokémon');
  }
}

export const searchGeneration = async (id) => {
  try {
    const response = await axiosInstances.PokeApi.get(`generation/${id}`)
    const pokemons = response.data.pokemon_species;

    const detailed = await Promise.all(
      pokemons.map(async (p) => {
        const detail = await PokemonDetail(p.name);
        return {
          id: detail.id,
          name: detail.name,
          image: detail.image
        };
      })
    );

    return {
      content: detailed,
      last: detailed.length < 9 // si trae menos de 9, no hay siguiente página
    };
  } catch (error) {
    throw new Error('Error en listar los Pokémon');
  }
}
