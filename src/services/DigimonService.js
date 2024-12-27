import axiosInstances from './axios';

export const searchDigimon = (digimonName) => {
  return axiosInstances.DigiApi.get(`digimon/${digimonName}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const searchIdDigimon = (digimonId) => {
  return axiosInstances.DigiApi.get(`digimon/${digimonId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}