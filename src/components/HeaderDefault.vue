<script lang="ts" setup>
import { ref } from 'vue'
const menu = ref([
  {
    name: 'event-list',
    val: 'Events'
  },
  {
    name: 'about',
    val: 'About'
  }
])
</script>
<template>
  <v-app-bar elevation="2">
    <v-row justify="center" align="center">
      <ul class="d-flex align-center justinfy-space-between">
        <li v-for="(item, key) in menu" :key="key" class="mx-2">
          <RouterLink :to="{ name: item.name }" class="pa-4" active-class="text-cyan rounded">{{
            item.val
          }}</RouterLink>
        </li>
      </ul>
    </v-row>
  </v-app-bar>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
