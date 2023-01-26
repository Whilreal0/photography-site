<template>
  <div
    class="
      absolute
      transition-opacity
      bg-white
      opacity-80
      h-screen
      w-full
      cursor-default
      
    "
    @click="closeModal"
  ></div>
</template>

<script>
import { EventBus } from '@/main'

export default {
  props: {
    openModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      EventBus.$emit('closeModal')
    },
  },
};
</script>

<style>
</style>