<script lang="ts" setup>
import { ref } from 'vue'
import ListDefault from '@/components/ListDefault.vue'
import { onMounted } from 'vue'
import EventService from '@/services/EventService.js'
import router from '@/router'

let events = ref<MyEvent[]>([])
onMounted(() => {
  EventService.getEvents()
    .then(({ data }) => {
      events.value = data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>
<template>
  <h1 class="text-center mb-8">Events for GOOD</h1>
  <ListDefault
    :events="events"
    @clickItem="
      (event: MyEvent) => {
        router.push(`/event/${event.id}`)
      }
    "
  ></ListDefault>
</template>
