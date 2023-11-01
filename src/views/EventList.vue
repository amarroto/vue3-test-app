<script lang="ts" setup>
import ListDefault from '@/components/ListDefault.vue'

const events: MyEvent[] = [
  {
    name: 'finish this day',
    desc: 'find out something new about vue'
  },
  {
    name: 'travel',
    desc: 'move to Alicante'
  }
]
</script>
<template>
  <h1 class="text-center mb-8">Events for GOOD</h1>
  <ListDefault :events="events"></ListDefault>
</template>
