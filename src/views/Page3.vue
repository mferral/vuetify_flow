<template>
  <v-container fluid class="text-center">
    <v-row
      justify="space-between"
    >
      <v-col cols="12">
        <v-btn
          color="indigo"
          class="white--text"
          @click="show = !show"
        >
          Toggle
        </v-btn>
      </v-col>

      <v-col cols="12" class="mt-12">
        <v-badge
          v-model="show"
          color="cyan"
          left
        >
          <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon
            large
            color="grey lighten-1"
          >shopping_cart</v-icon>
        </v-badge>

        <v-badge
          v-model="show"
          color="purple"
        >
          <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon large color="grey">mail</v-icon>
        </v-badge>
      </v-col>
    </v-row>
    <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        show: true,
      }
    },
  }
</script>