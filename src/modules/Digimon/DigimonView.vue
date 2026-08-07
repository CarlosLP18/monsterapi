<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold mb-6">
      Digimon
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
        :items="digimonCards"
        @more-info="openDigimonDetail"
      />

      <v-alert
        v-if="digimonCards.length === 0"
        type="info"
        class="mt-4"
      >
        No se encontraron Digimon.
      </v-alert>

      <v-row
        v-if="digimonCards.length > 0"
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

    <v-dialog
      v-model="dialog"
      max-width="700"
    >
      <v-card v-if="selectedDigimon">
        <v-card-title class="text-h5 font-weight-bold">
          Detalles del Digimon
        </v-card-title>

        <v-divider />

        <v-card-text>
          <v-row align="center">
            <v-col
              cols="12"
              sm="5"
              class="d-flex justify-center"
            >
              <v-img
                v-if="selectedDigimon.image"
                :src="selectedDigimon.image"
                :alt="selectedDigimon.name"
                width="220"
                height="220"
                contain
              />
            </v-col>

            <v-col
              cols="12"
              sm="7"
            >
              <p class="text-h6 font-weight-bold">
                #{{ selectedDigimon.id }}
                -
                {{ selectedDigimon.name }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />

          <v-btn
            variant="text"
            @click="closeDialog"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ListCard from '@/components/ListCard.vue'
import { DigimonList } from '@/services/DigimonService'

export default {
  name: 'DigimonView',

  components: {
    ListCard
  },

  data() {
    return {
      digimons: [],
      currentPage: 0,

      loading: false,
      error: null,

      disableNext: false,

      dialog: false,
      selectedDigimon: null
    }
  },

  computed: {
    digimonCards() {
      return this.digimons.map((digimon) => ({
        id: digimon.id,
        name: digimon.name,
        image: digimon.image?.href || digimon.image || null,
        originalData: digimon
      }))
    }
  },

  methods: {
    async loadDigimons() {
      this.loading = true
      this.error = null

      try {
        const data = await DigimonList(this.currentPage)

        this.digimons = Array.isArray(data.content)
          ? data.content
          : []

        /*
         * Adaptar esta validación a los datos reales
         * que devuelve la API.
         */
        if (typeof data.last === 'boolean') {
          this.disableNext = data.last
        } else if (data.pageable?.totalPages) {
          this.disableNext =
            this.currentPage >= data.pageable.totalPages - 1
        } else {
          this.disableNext = this.digimons.length === 0
        }
      } catch (error) {
        console.error('Error al cargar Digimon:', error)

        this.error =
          error.response?.data?.message ||
          error.message ||
          'No se pudieron cargar los Digimon.'

        this.digimons = []
      } finally {
        this.loading = false
      }
    },

    async paginaAnterior() {
      if (this.currentPage === 0 || this.loading) {
        return
      }

      this.currentPage--

      await this.loadDigimons()
    },

    async paginaSiguiente() {
      if (this.disableNext || this.loading) {
        return
      }

      this.currentPage++

      await this.loadDigimons()
    },

    openDigimonDetail(id) {
      const digimon = this.digimonCards.find(
        (item) => item.id === id
      )

      if (!digimon) {
        this.error = 'No se encontró el Digimon seleccionado.'
        return
      }

      this.selectedDigimon = digimon
      this.dialog = true
    },

    closeDialog() {
      this.dialog = false
      this.selectedDigimon = null
    }
  },

  mounted() {
    this.loadDigimons()
  }
}
</script>