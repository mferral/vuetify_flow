<template>
  <v-app>
    <div>
      <v-toolbar>
        <v-toolbar-title>{{title}}</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-btn text to="/">Home</v-btn>
          <v-btn text to="/page1">Page 1</v-btn>
          <v-btn text to="/page2">Page 2</v-btn>
          <v-btn text to="/page3">Page 3</v-btn>
        <v-btn text to="/page4">Page 4</v-btn>
          <v-btn text to="/about">About</v-btn>
        </v-toolbar-items>

        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
    </div>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
    title: "Vuetify Flow"
  })
};
</script>
