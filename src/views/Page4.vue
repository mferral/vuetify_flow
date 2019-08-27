<template>
    <v-card max-width="344" style="margin-top: 40px;" class="mx-auto">
    <v-card-title>Titulo</v-card-title>
    <v-card-text>Contenido</v-card-text>
    <v-card-actions>
      <v-btn text>Click</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        data () {
        return {
            colors: [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
            ],
        }
        },
    }
</script>