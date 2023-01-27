<template>
  <div class="flex items-center justify-center">
    <div class="absolute z-10 text-white ">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-semibold stroke-black">Shutter Dream</h1>
      <h5 class="text-xs sm:text-2xl md:text-xl text-right  -translate-y-[5px] uppercase font-semibold">Photography</h5>
    </div>

    <carousel
    ref="carousel"
      :lazy-load="false"
      :autoplay="true"
      :loop="true"
      class="h-screen max-h-screen relative visible"
      :perPage="1"
      :navigationEnabled="false"
      :paginationEnabled="false"
      :direction="'rtl'"
      :interval="1000"
      :speed="800"
      :resistanceCoef="0"
      
    >
      <slide v-for="item in items" :key="item.id" >
        <img
          :src="item.path" 
          :alt="item.alt"
          class=" 
            object-cover
            bg-auto md:bg-center
            h-screen
            
            brightness-[.8]
            md:brightness-[.5]
            w-full
           
           
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
  props:['items'],
  data: () => ({
    
    ease: "ease-in-out",
  }),
  mounted(){
    console.log('force')
    setTimeout(this.$refs.carousel.computeCarouselWidth, 300)
  }
 
};
</script>

<style>


</style>
