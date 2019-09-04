<template>
    <div>
          {{beers.beerpost}}

      <v-form ref="form" v-model="valid" lazy-validation >
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="beers.beerpost.name" label="Nombre" :rules="[v => !!v || 'Item is required']" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="beers.beerpost.estilo"  label="Estilo" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="beers.beerpost.color" label="Color" :rules="[v => !!v || 'Item is required']" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="beers.beerpost.alcohol"  label="Alcohol" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="beers.beerpost.pais" label="País" :rules="[v => !!v || 'Item is required']" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="beers.beerpost.url"  label="URL" :rules="[v => !!v || 'Item is required']"  required></v-text-field>
            </v-col>                    


          </v-row>
          <v-btn color="success" class="mr-4" :loading="beers.loading" :disabled="!valid || beers.loading" @click.prevent="guardar">
            Guardar              
          </v-btn>
        </v-container>
      </v-form>




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
      ...mapState(["beers"])
    },
    methods: {
      ...mapActions(["GET_BEER","EDIT_BEER"]),
      guardar(){
        if (this.$refs.form.validate()) {
          this.EDIT_BEER(this.beers.beerpost);
        }
      }
    },
    mounted(){
        this.GET_BEER(this.id);
    },
    created(){
      this.$store.commit("SET_BEER",{});
    }
  }
</script>