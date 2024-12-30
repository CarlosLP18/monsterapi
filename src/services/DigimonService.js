import axiosInstances from './axios';

export const DigimonList = (page) => {
  return axiosInstances.DigiApi.get(`digimon?pageSize=9&page=${page}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

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

export const AttributeList = (page) => {
  return axiosInstances.DigiApi.get(`attribute?page=${page}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const searchAttribute = (attributeSearch) => {
  return axiosInstances.DigiApi.get(`attribute/${attributeSearch}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const FieldList = (page) => {
  return axiosInstances.DigiApi.get(`field?page=${page}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const searchField = (fieldSearch) => {
  return axiosInstances.DigiApi.get(`field/${fieldSearch}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const TypeList = (page) => {
  return axiosInstances.DigiApi.get(`type?page=${page}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const searchType = (typeSearch) => {
  return axiosInstances.DigiApi.get(`type/${typeSearch}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const SkillList = (page) => {
  return axiosInstances.DigiApi.get(`skill?page=${page}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}

export const searchSkill = (skillSearch) => {
  return axiosInstances.DigiApi.get(`skill/${skillSearch}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Error al buscar el Digimon: ' + error);
    });
}