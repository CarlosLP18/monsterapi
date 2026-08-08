<template>
  <v-app>
    <v-app-bar 
      :elevation="2"
      rounded
      color="#7fffd4"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-tittle class="navbar-title">Monster Api</v-app-bar-tittle>
    </v-app-bar>

    <v-main>
      <v-tabs v-model="tab" color="basil" grow>
        <v-tab value="Pokemon">
          Pokemon Api
        </v-tab>
        <v-tab value="Digimon">
          Digimon Api
        </v-tab>
      </v-tabs>

      <v-divider></v-divider>
      
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Pokemon">
          <PokemonView />
        </v-tabs-window-item>
        <v-tabs-window-item value="Digimon">
          <DigimonView />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-main>

    <v-footer
      border
      color="#7fffd4"
    >
    </v-footer>
  </v-app>
</template>

<script>
import DigimonView from './modules/Digimon/DigimonView.vue';
import PokemonView from './modules/Pokemon/PokemonView.vue';

export default {
  name: 'App',
  components: {
    DigimonView,
    PokemonView
  },
  data: () => ({
    tab: 'Apis'
  })
}
</script>

<style>
.navbar-title {
  color:white;
  text-align: center;
  flex: 1;
}
</style>
