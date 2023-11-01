<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderDefault from './components/HeaderDefault.vue'
</script>

<template>
  <v-app>
    <HeaderDefault></HeaderDefault>
    <v-main style="min-height: 300px">
      <div class="pt-4">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
