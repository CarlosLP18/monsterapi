import axiosInstances from './axios';

export const searchPokemon = (pokemonName) => {
  return axiosInstances.PokeApi.get(`pokemon/${pokemonName}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw new Error('Error al buscar el Pókemon: ' + error);
    });
}