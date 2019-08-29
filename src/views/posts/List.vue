<template>
  <v-container fluid grid-list-md>
    <v-btn class="hidden-md-and-up" color="accent " dark fixed bottom right fab>
      <v-icon>add</v-icon>
    </v-btn>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-btn class="add hidden-sm-and-down" to="/posts/add" color="accent" dark fab>
        <v-icon class="icon">add</v-icon>
      </v-btn>
    </v-layout>

    <h2 class="font-weight-medium">My Posts</h2>
    <p>
      Item Selected: {{idSelected}}
    </p>
    <v-progress-linear 
        :active="posts.loading"
        :indeterminate="posts.loading"        
        >
        </v-progress-linear>
    <v-card class="mx-auto">
      <v-list two-line>
        <v-list-item v-for="item in posts.list" :key="item.id" @click="idSelected = item.id">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.id"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            
            <v-btn icon :to="{name: 'post-edit' , params : {id : item.id }}">
              <v-icon color="grey lighten-1">edit</v-icon>
            </v-btn>
            
          </v-list-item-action>
        </v-list-item>
      </v-list>
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
      idSelected: 0
    }),
    computed: {
      ...mapState(["posts"])
    },
    methods: {
      ...mapActions(["LIST_POST"]),      
    },
    mounted() {
      this.LIST_POST()
    }
  }
</script>