import axios from "axios";

const PokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000
});

const DigiApi = axios.create({
  baseURL: "https://digi-api.com/api/v1/",
  timeout: 5000
});

export default {PokeApi, DigiApi};