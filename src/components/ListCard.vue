<template>
  <v-row>
    <v-col
      v-for="item in items"
      :key="item.id"
      cols="12"
      sm="6"
      md="4"
      lg="4"
    >
      <v-card
        class="d-flex flex-column"
        height="100%"
        elevation="3"
        rounded="lg"
      >
        <v-img
          v-if="item.image"
          :src="item.image"
          :alt="item.name"
          height="220"
          contain
        />

        <v-sheet
          v-else
          height="220"
          color="grey-lighten-3"
          class="d-flex justify-center align-center"
        >
          Sin imagen
        </v-sheet>

        <v-card-title>
          {{ item.name }}
        </v-card-title>

        <v-card-subtitle>
          #{{ item.id }}
        </v-card-subtitle>

        <v-spacer />

        <v-card-actions>
          <v-btn
            color="#263cc4"
            variant="flat"
            rounded="lg"
            prepend-icon="mdi-plus"
            @click="moreInfo(item.id)"
          >
            Ver más
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ListCard',

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  emits: ['more-info'],

  methods: {
    moreInfo(id) {
      this.$emit('more-info', id)
    }
  }
}
</script>