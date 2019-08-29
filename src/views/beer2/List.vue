<template>
<div>
  <v-container grid-list-md >
    <div class="mb-5 text-center">
      <h1 class="display-1">Cervezas</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit vel velit nisi suscipit, quae quas aspernatur illo rem sequi hic. Perferendis enim quis esse rerum quia quisquam soluta fuga debitis.</p>

      <v-btn class="ma-2" tile outlined color="success" to="/beer2/add">Agregar</v-btn>

      <hr>
    </div>
    <v-row flex-no-wrap>
        <v-card
        v-for="item in beers.list" :key="item.id" 
        max-width="344"
        class="mx-auto"    
        >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">{{item.name}}</v-list-item-title>
          <v-list-item-subtitle>{{item.estilo}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img
        :src="item.url"
        height="194"
      ></v-img>

      <v-card-text>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam aliquam, libero, dolores, ab labore quam soluta blanditiis nisi porro minus delectus alias dignissimos! Recusandae rem excepturi cum dicta architecto!</p> 
        <p><span class="font-weight-black">Color:</span> {{item.color}}</p>
        <p><span class="font-weight-black">Alcohol:</span> {{item.alcohol}}</p>
        <p><span class="font-weight-black">País:</span> {{item.pais}}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn
          text
          color="blue"
        >
          Editar
        </v-btn>
        <v-btn
          text
          color="red"
        >
          Eliminar
        </v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-row>


  </v-container>
</div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'

  export default {
    data: () => ({    
    }),
    computed: {
      ...mapState(["beers"])
    },
    methods: {
      ...mapActions(["LIST_BEERS"]),      
    },
    mounted() {
      this.LIST_BEERS()
    }
  }
</script>