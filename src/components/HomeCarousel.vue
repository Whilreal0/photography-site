<template>
  <div class="flex items-center justify-center">
    
    <div class="absolute z-10 text-white ">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-semibold stroke-black">Shutter Dream</h1>
      <h5 class="text-xs sm:text-2xl md:text-xl text-right  -translate-y-[5px] uppercase font-semibold">Photography</h5>
    </div>
    
    <carousel
      :autoplay="true"
      :loop="false"
      class="h-screen max-h-screen relative"
      :perPage="1"
      :navigationEnabled="false"
      :paginationEnabled="false"
      :direction="'rtl'"
      :interval="1000"
      :speed="800"
      :resistanceCoef="0"
      :easing="ease"
    >
      <slide v-for="item in items" :key="item.id">
        <img
          :src="item.path"
          alt="item"
          class="
            object-cover
            bg-auto md:bg-center
            h-screen
            max-h-screen
            w-full
            brightness-[.8]
            md:brightness-[.5]
          "
        />
      </slide>
    </carousel>
    
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    items: [
      {
        id: 1,
        path: [require("@/assets/images/nature5.jpeg")],
      },
      {
        id: 2,
        path: [require("@/assets/images/wedding1.jpeg")],
      },
      {
        id: 3,
        path: [require("@/assets/images/nature1.jpeg")],
      },
      {
        id: 4,
        path: [require("@/assets/images/wedding3.jpeg")],
      },
      {
        id: 5,
        path: [require("@/assets/images/wedding4.jpeg")],
      },
      {
        id: 6,
        path: [require("@/assets/images/nature.jpeg")],
      },
    ],
    ease: "ease-in-out",
  }),
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
