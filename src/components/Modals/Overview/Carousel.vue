<template>
  <div
    class="
      absolute
      w-full
      md:w-[70vw]
      h-[60vh]
      md:h-[80vh]
      
      flex
      justify-center
      items-center
    "
  >
    <Carousel
    :navigateTo="initialSlide"
      :resistanceCoef="0"
      :centerMode="true"
      :perPage="1"
      :navigationEnabled="true"
      :paginationEnabled="false"
      
      
    >
      <slide v-for="(item,index) in items" :key="index" >
        <img 
          class="object-cover bg-center h-[80vh] w-full relative"
          :src="item.path"
          :alt="item.path"
        />
      </slide>
    </Carousel>
  </div>
</template>

<script>

import { Carousel, Slide } from "vue-carousel";
export default {
  props: ["items", 'initialSlide'],
  components: {
    Carousel,
    Slide,
  },
  
  
  
};
</script>

<style >
.VueCarousel-navigation-button {
  color: white;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.3);
}
.VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: 0 !important;
}

.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  position: absolute;
  left: 37px;
  color: white;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.3);

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.VueCarousel-navigation-button.VueCarousel-navigation-next {
  position: absolute;
  right: 37px;
  color: white;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.3);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>