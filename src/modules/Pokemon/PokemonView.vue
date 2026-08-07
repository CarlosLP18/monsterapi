<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-6">
      Pokemon
    </h1>

    <v-alert
      v-if="error"
      type="error"
      closable
      class="mb-4"
      @click:close="error = null"
    >
      {{ error }}
    </v-alert>

    <div
      v-if="loading"
      class="d-flex justify-center align-center py-10"
    >
      <v-progress-circular
        indeterminate
        color="primary"
        size="50"
      />
    </div>

    <template v-else>
      <ListCard
        :items="pokemonCards"
        @more-info="openPokemonDetail"
      />

      <v-alert
        v-if="pokemonCards.length === 0"
        type="info"
        class="mt-4"
      >
        No se encontraron Pokemon.
      </v-alert>

      <v-row
        v-if="pokemonCards.length > 0"
        class="mt-6 mb-4"
        align="center"
      >
        <v-col class="d-flex justify-start">
          <v-btn
            color="#263cc4"
            variant="flat"
            rounded="lg"
            prepend-icon="mdi-chevron-left"
            :disabled="currentPage === 0 || loading"
            @click="paginaAnterior"
          >
            Anterior
          </v-btn>
        </v-col>

        <v-col class="text-center">
          Página {{ currentPage + 1 }}
        </v-col>

        <v-col class="d-flex justify-end">
          <v-btn
            color="#263cc4"
            variant="flat"
            rounded="lg"
            append-icon="mdi-chevron-right"
            :disabled="disableNext || loading"
            @click="paginaSiguiente"
          >
            Siguiente
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import ListCard from '@/components/ListCard.vue';
import { PokemonList } from '@/services/PokemonService';

export default {
  name: 'PokemonView',

  components: {
    ListCard
  },

  data() {
    return {
      pokemons: [],
      currentPage: 0,

      loading: false,
      error: null,

      disableNext: false,

      dialog: false,
      selectedPokemon: null
    }
  },

  computed: {
    pokemonCards() {
      return this.pokemonss.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image?.href || pokemon.image || null,
        originalData: pokemon
      }))
    }
  }
}
</script>

<style lang="">
    
</style>