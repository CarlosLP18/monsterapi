<template>
  <v-row>
    <v-col>
      <v-select
        v-model="selectedType"
        label="Type"
        :items="PokemonType"
        item-title="name"
        item-value="id"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col>
      <v-select
        v-model="selectedGeneration"
        label="Generation"
        :items="PokemonGeneration"
        item-title="name"
        item-value="id"
        variant="outlined"
      ></v-select>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-text-field
        v-model="PokemonName"
        label="Pokemon Name"
        variant="outlined"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-btn>
      Clear
    </v-btn>
  </v-row>
</template>

<script>
import {
  PokemonType,
  PokemonGeneration
} from '@/data/PokemonData';

export default {
  name: 'SearchFilter',

  data() {
    return {
      selectedType: 0,
      selectedGeneration: 0,
      PokemonType,
      PokemonGeneration,
      PokemonName: null
    }
  }
}
</script>

<style>

</style>