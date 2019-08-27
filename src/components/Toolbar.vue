<template>
  <div>
      <v-toolbar>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn text to="/">Home</v-btn>          
          <v-btn text to="/posts/list">Posts</v-btn>          
          <v-btn text to="/about">About</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>