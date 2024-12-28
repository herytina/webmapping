<template>
  <v-app-bar
    :elevation="7"
    scroll-behavior="elevate inverted fade-image"
    scroll-threshold="290"
    image="https://picsum.photos/1920/1080?random"
  >
    <template #prepend>
      <v-app-bar-nav-icon />
    </template>

    <v-app-bar-title>Web mapping VDI</v-app-bar-title>

    <template #append>
      <v-btn icon="mdi-heart" />

      <v-btn icon="mdi-magnify" />

      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
</script>
<style>
</style>