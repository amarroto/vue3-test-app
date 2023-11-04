<script lang="ts" setup>
import EventService from '@/services/EventService'
import { useRoute } from 'vue-router'

const route = useRoute()
let event = {} as MyEvent
EventService.getEvent(route.params.eventId)
  .then(({ data }) => {
    event = data
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<template>
  <div class="text-center">
    <h1>{{ event.name }}</h1>
    <div class="my-4">{{ event.desc }}</div>
  </div>
</template>
