<template>
    <div class="fixed inset-0 md:py-[50px] z-10 flex justify-center items-center">
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-in transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-in transition-medium"
        leave-to-class="opacity-0"
      >
        <ModalOverlay :openModal="openModal" @close="closeModal" />
      </transition>
      <Carousel
        :openModal="openModal"
        :initialSlide="initialSlide"
        :items="items"
      />
      <button
        @click="closeModal"
        class="fixed right-5 top-5 md:right-10 md:top-10"
      >
        <box-icon class="fill-black stroke-[50px]" size="md" name="x"></box-icon>
      </button>
    </div>
  </template>
  
  <script>
  import { EventBus } from "@/main";
  import Carousel from "./Carousel.vue";
  import ModalOverlay from "./ModalOverlay";
  export default {
    components: {
      ModalOverlay,
      Carousel,
    },
    props: [ "items", "openModal", "initialSlide"],
    methods: {
      closeModal() {
        EventBus.$emit("closeModal");
      },
    },
    
  };
  </script>
  
  