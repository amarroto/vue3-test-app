<script lang="ts" setup>
import ListItem from './ListItem.vue'

defineProps<{
  events: MyEvent[]
}>()
</script>
<template>
  <div class="list-holder mx-auto">
    <ListItem
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      class="mb-6"
      @click="$emit('clickItem', event)"
    />
  </div>
</template>
<style lang="scss" scoped>
.list-holder {
  width: 420px;
}
</style>
