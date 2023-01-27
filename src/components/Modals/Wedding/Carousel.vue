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
      <slide v-for="(item, index) in items" :key="index">
        <img
          class="object-cover bg-center h-[80vh] w-full relative"
          :src="item.path"
          :alt="item.alt"
        />
      </slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  props: ["items",'initialSlide'],

  components: {
    Carousel,
    Slide,
  },
};
</script>

