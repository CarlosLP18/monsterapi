import axiosInstances from './axios';

export const PokemonList = (page) => {
  return axiosInstances.PokeApi.get(`pokemon/?limit=9&offset=${page}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error en listar los Pokemon')
    })
}

export const searchPokemon = (pokemonName) => {
  return axiosInstances.PokeApi.get(`pokemon/${pokemonName}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw new Error('Error al buscar el Pókemon: ' + error);
    });
}