<template>
  <div>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedLevel"
          label="Level"
          :items="DigimonLevel"
          item-title="name"
          item-value="id"
          variant="outlined"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedAttribute"
          label="Attribute"
          :items="DigimonAttribute"
          item-title="name"
          item-value="id"
          variant="outlined"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedType"
          label="Type"
          :items="DigimonType"
          item-title="name"
          item-value="id"
          variant="outlined"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="DigimonName"
          label="Digimon Name"
          variant="outlined"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  DigimonType,
  DigimonLevel,
  DigimonAttribute
} from '@/data/DigimonData';

export default {
  name: 'SearchFilterDigimon',

  data() {
    return {
      selectedType: 0,
      selectedLevel: 0,
      selectedAttribute: 0,
      DigimonType,
      DigimonLevel,
      DigimonAttribute,
      DigimonName: null
    }
  }
}
</script>

<style>
  
</style>