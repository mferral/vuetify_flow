<template>
  <v-container fluid grid-list-md>
    <v-card class="mx-auto">
      <v-card-title>New Post</v-card-title>
      <v-card-text>
        {{post}}
        <v-form 
        ref="form"
        v-model="valid"
        lazy-validation
        >
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field 
                v-model="post.title"
                label="Title" 
                :rules="[v => !!v || 'Item is required']"
                required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                v-model="post.description" 
                label="Description"
                :rules="[v => !!v || 'Item is required']" 
                required></v-text-field>
              </v-col>

            </v-row>
            <v-btn color="success" 
            class="mr-4"             
            :loading="posts.loading"
            :disabled="!valid || posts.loading"
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
    data: () => ({
      valid: true,
      post: {}
    }),
    computed: {
      ...mapState(["posts"])
    },
    methods: {
      ...mapActions(["ADD_POST"]),
      guardar(){
        if (this.$refs.form.validate()) {                   
          this.ADD_POST(this.post);
        }
      }
    }
  }  
</script>