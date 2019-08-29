<template>
    <v-container fluid grid-list-md>
    <v-card class="mx-auto">
      <v-card-title>Edit Post</v-card-title>
      <v-card-text>
        {{posts.post}}
        <v-form 
        ref="form"
        v-model="valid"
        lazy-validation
        >
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field 
                v-model="posts.post.title"
                label="Title" 
                :rules="[v => !!v || 'Item is required']"
                required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                v-model="posts.post.description" 
                label="Description"
                :rules="[v => !!v || 'Item is required']" 
                required></v-text-field>
              </v-col>

            </v-row>
            <v-btn color="success" 
            class="mr-4"             
            :loading="posts.loadingSave"
            :disabled="!valid || posts.loadingSave"
            @click.prevent="guardar">
              Save              
            </v-btn>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
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