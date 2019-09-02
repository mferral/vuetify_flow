<template>
<div>
  <v-container>

    <div class="mb-5 text-center">
      <h1 class="display-1">Cervezas</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit vel velit nisi suscipit, quae quas aspernatur illo rem sequi hic. Perferendis enim quis esse rerum quia quisquam soluta fuga debitis.</p>
    </div>
    {{post}}
    <v-form ref="form" v-model="valid" lazy-validation >
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="post.name" label="Nombre" :rules="[v => !!v || 'Item is required']" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="post.estilo"  label="Estilo" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="post.color" label="Color" :rules="[v => !!v || 'Item is required']" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="post.alcohol"  label="Alcohol" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="post.pais" label="País" :rules="[v => !!v || 'Item is required']" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="post.url"  label="URL" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
          </v-col>                    


        </v-row>
        <v-btn color="success" class="mr-4" :loading="posts.loading" :disabled="!valid || posts.loading" @click.prevent="guardar">
          Guardar              
        </v-btn>
      </v-container>
    </v-form>






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
      valid: true,
      post: {}
    }),
    computed: {
      ...mapState(["posts"])
    },
    methods: {
      ...mapActions(["ADD_BEERS"]),
      guardar(){
        if (this.$refs.form.validate()) {                   
          this.ADD_BEERS(this.post);
        }
      }
    }
  }  
</script>