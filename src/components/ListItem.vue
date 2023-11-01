<script lang="ts" setup>
defineProps<{
  event: MyEvent
}>()
</script>
<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        :elevation="isHovering ? 8 : 2"
        v-bind="{ ...props, ...$attrs }"
        :style="{ cursor: 'pointer' }"
        class="text-center"
      >
        <v-card-title class="text-cyan">{{ event.name }}</v-card-title>
        <v-card-text>
          <div>{{ event.desc }}</div>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
