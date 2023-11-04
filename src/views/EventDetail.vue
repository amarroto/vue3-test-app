<script lang="ts" setup>
import EventService from '@/services/EventService'
import { onMounted } from 'vue'
import { ref } from 'vue'

const event = ref<MyEvent | null>(null)
const props = defineProps<{
  eventId: string
}>()

onMounted(async () => {
  await EventService.getEvent(props.eventId)
    .then(({ data }) => {
      event.value = data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <div class="text-center">
    <div v-if="event">
      <h1>{{ event.title }}</h1>
      <div class="my-4">{{ event.description }}</div>
    </div>
  </div>
</template>
