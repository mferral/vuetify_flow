<template>
    <div>
        <v-container>

    <v-form ref="form" v-model="valid" lazy-validation >
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="beer.name" label="Nombre" :rules="[v => !!v || 'Item is required']" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="beer.estilo"  label="Estilo" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="beer.color" label="Color" :rules="[v => !!v || 'Item is required']" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="beer.alcohol"  label="Alcohol" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="beer.pais" label="País" :rules="[v => !!v || 'Item is required']" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="beer.url"  label="URL" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
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
    data(){
        return{
            id: this.$route.params.id,
            valid: true
        }
    },
    computed: {
      ...mapState(["posts"])
    },
    methods: {
      ...mapActions(["GET_POST","EDIT_POST"]),
      guardar(){
        if (this.$refs.form.validate()) {
          this.EDIT_POST(this.posts.post);
        }
      }
    },
    mounted(){
        this.GET_POST(this.id);
    },
    created(){
      this.$store.commit("SET_POST",{});
    }
  }
</script>