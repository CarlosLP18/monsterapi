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
        @update:model-value="filterByType"
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
        @update:model-value="filterByGeneration"
      ></v-select>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-text-field
        v-model="PokemonName"
        label="Pokemon Name"
        variant="outlined"
        clearable
        @keyup.enter="filterByName"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-btn
      @click="clearFilters"
    >
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

  emits: ['filter-change'],

  data() {
    return {
      selectedType: 0,
      selectedGeneration: 0,
      PokemonType,
      PokemonGeneration,
      PokemonName: '',
    }
  },

  methods: {
    emitFilters() {
      this.$emit('filter-change', {
        type: this.selectedType,
        generation: this.selectedGeneration,
        name: this.PokemonName?.trim() || ''
      })
    },

    filterByType() {
      this.selectedGeneration = 0
      this.PokemonName = ''
      this.emitFilters()
    },

    filterByGeneration() {
      this.selectedType = 0
      this.PokemonName = ''
      this.emitFilters()
    },

    filterByName() {
      this.selectedType = 0
      this.selectedGeneration = 0
      this.emitFilters()
    },

    clearFilters() {
      this.selectedType = 0
      this.selectedGeneration = 0
      this.PokemonName = ''
      this.emitFilters()
    }
  }
}
</script>

<style>

</style>
